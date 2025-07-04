<script lang="ts">
	import icons from '$assets/icons.svg';
	import { store } from '$data/stores.svelte';
	import certificates from '$data/certificates.json';
	import { SectionWrapper, DraggableContainer } from '$components';

	interface Certificate {
		title: string;
		description: string;
		id: string;
		date: string;
		issuer: { text: string; icon: string }[];
		skills: { text: string; icon: string }[];
	}

	const theme = $derived({
		button: store.darkMode ? 'btn-outline-light' : 'btn-outline-primary',
		text: store.darkMode ? 'text-secondary' : 'text-primary'
	});
</script>

{#snippet educationCards(list: Certificate[])}
	{#each list as { title, description, id, date, issuer, skills }, index ('certificate-' + index)}
		<article class="draggableItem hoverTransition">
			<div class="card certificateCard h-100 shadow-sm">
				<div class="card-body d-flex flex-column h-100">
					<svg class="icon award-icon h2 mb-3 {theme.text}">
						<use xlink:href={icons + '#award-icon'}></use>
					</svg>
					<h3 class="h4 card-title fw-semibold mb-3">{title}</h3>
					<div class="card-subtitle mb-2">
						<svg class="icon award-icon small">
							<use xlink:href={icons + '#calendar-icon'}></use>
						</svg>
						Issued: {date}
						<div class="d-flex gap-1 my-2">
							<div class="d-flex align-items-center gap-1">
								<svg class="icon certificate-icon small">
									<use xlink:href={icons + '#certificate-icon'}></use>
								</svg>
								<span class="me-1">From:</span>

								{#each issuer as { text, icon }, index ('issuer-' + index)}
									<div class="issuer-item me-2">
										<svg class="icon {icon} small">
											<use xlink:href={icons + '#' + icon}></use>
										</svg>
										{text}
									</div>
								{/each}
							</div>
						</div>
					</div>
					<p class="card-text short mb-4">{description}</p>
					<div class="fw-semibold mt-auto">Skills Learned:</div>
				</div>

				<ul class="list-group list-group-flush mt-auto">
					{#each skills as skill, index ('skill-' + index)}
						<li class="list-group-item">
							<svg class="icon skill-icon me-1 {skill.icon + '-icon'} small">
								<use xlink:href={icons + '#' + skill.icon + '-icon'}></use>
							</svg>
							{skill.text}
						</li>
					{/each}
				</ul>

				<div class="card-body text-center">
					<svg class="icon certificate-icon small">
						<use xlink:href={icons + '#certificate-icon'}></use>
					</svg>
					Verify Now:
					<a
						href={'https://coursera.org/verify/professional-cert/' + id}
						title={'Verify ' + title}
						class="text-body fw-medium"
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						{id}
					</a>
				</div>
				<div class="card-footer p-0">
					<a
						href={'https://www.coursera.org/account/accomplishments/certificate/' + id}
						class="btn {theme.button} py-3 rounded-0 rounded-bottom-2 border-0 w-100"
						title={'Download ' + title}
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						<svg class="icon download-icon">
							<use xlink:href={icons + '#download-icon'}></use>
						</svg> Certificate
					</a>
				</div>
			</div>
		</article>
	{/each}
{/snippet}

<SectionWrapper id="education" title="My Education" icon="user-graduate-icon">
	<div class="container">
		<DraggableContainer
			touchSensitivity={2}
			indicators={true}
			id="educationContainer"
			class="educationContainer"
		>
			{@render educationCards(certificates)}
		</DraggableContainer>
	</div>
</SectionWrapper>

<style lang="scss">
	.skill-icon {
		--icon-fill: var(--bs-body-color);
		fill: var(--icon-fill);
	}
	.short {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-clamp: 3;
		max-height: 4.8em;
	}
</style>
