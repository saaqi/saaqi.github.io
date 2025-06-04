<script>
	import services from '$data/services.json';
	import icons from '$assets/icons.svg';

	import { SectionWrapper, DraggableContainer } from '$components';

	import { store } from '$data/stores.svelte.js';
	const buttonColors = $derived({
		btn1: store.darkMode ? 'light' : 'primary',
		btn2: store.darkMode ? 'warning' : 'secondary',
		btn3: store.darkMode ? 'warning' : 'danger'
	});

	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/js/dist/modal.js');
	});
</script>

<!-- Generate Cards -->
{#snippet serviceCards(list)}
	{#each list as { title, copy, more, iconsList }, index ('card-' + index)}
		<div class="draggableItem">
			<div class="card serviceCard h-100 shadow-sm">
				<div class="card-header fs-4 d-flex gap-4">
					{#each iconsList as icon, index ('icon-' + index)}
						<svg class="icon {icon}">
							<use xlink:href={icons + '#' + icon}></use>
						</svg>
					{/each}
				</div>
				<div class="card-body d-flex flex-column">
					<h3 class="card-title fw-semibold h4 mb-3">{title}</h3>
					<p class="card-text">{@html copy}</p>
				</div>
				<div class="card-footer">
					<div class="btn-group w-100">
						<a
							href={'#'}
							class="btn btn-outline-{buttonColors.btn1} w-50 btn-icon d-flex align-items-center justify-content-center gap-1 scrollto"
							title="Hire Me!"
						>
							<svg class="icon handshake-icon">
								<use xlink:href="{icons}#handshake-icon"></use>
							</svg> Hire Me!
						</a>
						{#if more}
							<button
								type="button"
								class="btn btn-outline-{buttonColors.btn2} w-50 btn-icon d-flex align-items-center justify-content-center gap-1"
								data-bs-toggle="modal"
								data-bs-target="#{`service-` + index}"
								title="Get More Info"
							>
								<svg class="icon content-icon">
									<use xlink:href="{icons}#content-icon"></use>
								</svg> Info
							</button>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/each}
{/snippet}

<!-- Generate Modals -->
{#snippet serviceModals(list)}
	{#each list as { title, more }, index ('modal-' + index)}
		{#if more}
			<div
				class="modal fade"
				id={`service-` + index}
				tabindex="-1"
				aria-labelledby={`label-service-` + index}
				aria-hidden="true"
			>
				<div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
					<div class="modal-content">
						<div class="modal-header">
							<div class="modal-title fs-5" id={`label-service-` + index}>{title}</div>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
							></button>
						</div>
						<div class="modal-body">{@html more}</div>
						<div class="modal-footer py-1">
							<button
								type="button"
								class="btn btn-outline-{buttonColors.btn3} py-2 px-3 d-flex align-items-center"
								data-bs-dismiss="modal"
							>
								<svg class="icon close-icon fs-4">
									<use xlink:href="{icons}#close-icon"></use>
								</svg> Close
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/each}
{/snippet}

<SectionWrapper id="services" title="Services I Offer" icon="working-icon" class="services">
	<div class="container">
		<DraggableContainer
			touchSensitivity={2}
			indicators={true}
			id="servicesContainer"
			class="servicesContainer row g-2 draggableContainer pb-lg-0 pb-3"
		>
			{@render serviceCards(services)}
		</DraggableContainer>
		{@render serviceModals(services)}
	</div>
</SectionWrapper>

<style>
	.draggableItem {
		flex: 0 0 33.3333333%;
	}
	.draggableItem:hover {
		transform: scale(1.02);
		transition: var(--transition);
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
