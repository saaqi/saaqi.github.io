<script>
	import { SectionWrapper, DraggableContainer } from '$components';
	import { store } from '$data/stores.svelte.js';

	import projects from '$data/projects.json';
	import icons from '$assets/icons.svg';

	const btn1 = $derived(!store.darkMode ? 'btn-outline-primary' : 'btn-outline-light');
	const btn2 = $derived(!store.darkMode ? 'btn-outline-danger' : 'btn-outline-warning');

	// Import Portfolio Media Folder
	const portfolioMedia = import.meta.glob('$assets/portfolio/*', { eager: true });

	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/js/dist/modal.js');
	});
</script>

{#snippet portfolioCard(list)}
	{#each list as { coverImage, title, copy, github, link, caseStudy, techStack }, index ('project-' + index)}
		<div class="draggableItem hoverTransition">
			<div class="card portfolioCard h-100 shadow-sm">
				<img
					src={portfolioMedia['/src/assets/portfolio/' + coverImage]?.default || ''}
					class="card-img-top border-bottom"
					alt={'Screenshot of ' + title}
					loading="lazy"
					draggable="false"
				/>
				<div class="card-body d-flex flex-column">
					<h3 class="h4 card-title fw-semibold mb-3">{title}</h3>
					<p class="card-text mb-4">{copy}</p>
					<div class="fw-semibold mt-auto">Tech Stack:</div>
				</div>

				<ul class="list-group list-group-flush mt-auto">
					{#each techStack as { text, icon }, index ('tech-' + index)}
						<li class="list-group-item">
							<svg class={icon + ' icon'}>
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
								rel="nofollow"
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
								rel="nofollow"
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
		</div>
	{/each}
{/snippet}

{#snippet caseStudy(list)}
	{#each list as { title, caseStudy }, index ('case-study-' + index)}
		{#if caseStudy}
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
							<div class="modal-title fs-5" id={`case-study-` + index}>
								{title}: Case Study
							</div>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
							></button>
						</div>
						<div class="modal-body p-0" style="scrollbar-width: none; overflow-y: hidden;">
							<embed
								src={portfolioMedia['/src/assets/portfolio/' + caseStudy]?.default || ''}
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
		<DraggableContainer
			touchSensitivity={2}
			indicators={true}
			id="portfolioContainer"
			class="portfolioContainer row g-2 draggableContainer pb-lg-0 pb-3"
		>
			{@render portfolioCard(projects)}
		</DraggableContainer>
		{@render caseStudy(projects)}
	</div>
</SectionWrapper>

<style>
	.draggableItem {
		flex: 0 0 33.3333333%;
	}
	@media (max-width: 992px) {
		.draggableItem {
			flex: 0 0 48%;
		}
	}
	@media (max-width: 768px) {
		.draggableItem {
			flex: 0 0 95%;
		}
	}
</style>
