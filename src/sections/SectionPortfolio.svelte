<script lang="ts">
	import { onMount } from 'svelte';
	import icons from '$assets/icons.svg';
	import projects from '$data/projects.json';
	import { store } from '$data/stores.svelte';
	import { SectionWrapper, DraggableContainer } from '$components';

	const btn1 = $derived(!store.darkMode ? 'btn-outline-primary' : 'btn-outline-light');
	const btn2 = $derived(!store.darkMode ? 'btn-outline-danger' : 'btn-outline-warning');

	// Import Portfolio Media Folder
	const portfolioPdf = import.meta.glob('$assets/portfolio/*.pdf', { eager: true });
	const portfolioPics = import.meta.glob('$assets/portfolio/*.webp', {
		eager: true,
		query: {
			enhanced: true,
			w: '500;250',
			format: 'avif;webp'
		}
	});

	interface Project {
		title: string;
		coverImage: string;
		copy: string;
		github?: string;
		link?: string;
		caseStudy?: string;
		techStack: { text?: string; icon?: string }[];
	}

	// Case Study Modals
	let modalNumber = $state();
	const loadModal = (index: number) => () => {
		modalNumber = index;
	};

	onMount(async () => await import('bootstrap/js/dist/modal.js'));
</script>

{#snippet portfolioCard(list: Project[])}
	{#each list as { coverImage, title, copy, github, link, caseStudy, techStack }, index ('project-' + index)}
		<article class="draggableItem hoverTransition">
			<div class="card portfolioCard h-100 shadow-sm">
				{#each Object.entries(portfolioPics) as [_path, module], index ('pic-' + index)}
					{#if _path.includes(coverImage)}
						<enhanced:img
							src={(module as { default: string }).default}
							sizes="(min-width: 500px) 500px, 100vw"
							class="img-fluid card-img-top border-bottom"
							alt={'Screenshot of ' + title}
							loading="lazy"
							width="500"
							height="281"
							draggable="false"
						/>
					{/if}
				{/each}
				<div class="card-body d-flex flex-column">
					<h3 class="h4 card-title fw-semibold mb-3">{title}</h3>
					<p class="card-text mb-4">{copy}</p>
					<div class="fw-semibold mt-auto">Tech Stack:</div>
				</div>

				<ul class="list-group list-group-flush mt-auto">
					{#each techStack as { text, icon }, index ('tech-' + index)}
						<li class="list-group-item">
							<svg class="icon {icon} me-1">
								<use xlink:href={icons + '#' + icon}></use>
							</svg>
							{text}
						</li>
					{/each}
				</ul>

				<div class="card-footer">
					<div class="btn-group w-100">
						{#if github}
							<a
								href={github}
								class={'btn btn-icon fs-5 ' + btn1}
								title={'View ' + title + ' Project on GitHub'}
								aria-label={'View ' + title + ' Project on GitHub'}
								rel="nofollow noopener noreferrer"
								target="_blank"
							>
								<svg class="icon github-icon"><use xlink:href={icons + '#github-icon'}></use></svg>
							</a>
						{/if}
						{#if link}
							<a
								href={link}
								class={'btn btn-icon fs-5 ' + btn1}
								title={'Viesw ' + title + ' Live Project'}
								aria-label={'View ' + title + ' Live Project'}
								rel="nofollow noopener noreferrer"
								target="_blank"
							>
								<svg class="icon globe-icon">
									<use xlink:href={icons + '#globe-icon'}></use>
								</svg>
							</a>
						{/if}
						{#if caseStudy}
							<button
								type="button"
								onmouseover={loadModal(index)}
								onfocus={loadModal(index)}
								class={'btn btn-icon fs-5 ' + btn1}
								data-bs-toggle="modal"
								data-bs-target={`#case-study-` + index}
								{title}
								aria-label={title}
							>
								<svg class="icon content-icon">
									<use xlink:href={icons + '#content-icon'}></use>
								</svg>
							</button>
						{/if}
					</div>
				</div>
			</div>
		</article>
	{/each}
{/snippet}

{#snippet caseStudy(list: Project[])}
	{#each list as { title, caseStudy }, index ('case-study-' + index)}
		{#if index === modalNumber}
			<div
				class="modal fade"
				id={`case-study-` + index}
				tabindex="-1"
				aria-labelledby={`case-study-` + index}
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered modal-fullscreen">
					<div class="modal-content">
						<div class="modal-header">
							<div class="modal-title fs-5">
								{title}: Case Study
							</div>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
							></button>
						</div>
						<div class="modal-body p-0" style="scrollbar-width: none; overflow-y: hidden;">
							<embed
								src={(portfolioPdf['/src/assets/portfolio/' + caseStudy] as { default: string })
									?.default || ''}
								type="application/pdf"
								style="width: 100%; height: 100%;"
							/>
						</div>
						<div class="modal-footer py-1">
							<button
								type="button"
								class={'btn py-2 px-3 d-flex align-items-center ' + btn2}
								data-bs-dismiss="modal"
							>
								<svg class="icon close-icon fs-4">
									<use xlink:href={icons + '#close-icon'}></use>
								</svg> Close
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/each}
{/snippet}

<SectionWrapper id="portfolio" title="My Portfolio" icon="briefcase-icon">
	<div class="container">
		<DraggableContainer indicators={true} id="portfolioContainer" class="portfolioContainer">
			{@render portfolioCard(projects)}
		</DraggableContainer>
	</div>
	{@render caseStudy(projects)}
</SectionWrapper>
