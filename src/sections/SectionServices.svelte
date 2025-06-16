<script>
	import services from '$data/services.json';
	import icons from '$assets/icons.svg';

	import { SectionWrapper, DraggableContainer } from '$components';

	// import { store } from '$data/stores.svelte.js';
	// const buttonColors = $derived({
	// 	btn1: store.darkMode ? 'btn-outline-secondary' : 'btn-outline-primary',
	// 	btn3: store.darkMode ? 'btn-outline-warning' : 'btn-outline-danger'
	// });

	// import { onMount } from 'svelte';
	// onMount(async () => await import('bootstrap/js/dist/modal.js'));
</script>

<!-- Generate Cards -->
{#snippet serviceCards(list)}
	{#each list.services as { title, copy, iconsList }, index ('card-' + index)}
		<div class="draggableItem hoverTransition">
			<div class="card serviceCard shadow-sm h-100">
				<div class="card-header fs-4 d-flex gap-4">
					{#each iconsList as icon, index ('icon-' + index)}
						<svg class="icon {icon}">
							<use xlink:href={icons + '#' + icon}></use>
						</svg>
					{/each}
				</div>
				<div class="card-body d-flex flex-column h-100">
					<h3 class="card-title fw-semibold h4 mb-3">{title}</h3>
					<p class="card-text">{copy}</p>
				</div>
			</div>
		</div>
	{/each}
{/snippet}

{#snippet reasons(list)}
	{#each list.reasons as { heading, reason }, index ('reason-' + index)}
		<ul>
			<li>
				<strong>{heading}:</strong>
				{reason}
			</li>
		</ul>
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
		<h3 class="mt-5 mb-4 text-center">✅ Why Choose Me?</h3>
		{@render reasons(services)}
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
