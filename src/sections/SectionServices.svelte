<script lang="ts">
	import icons from '$assets/icons.svg';
	import services from '$data/services.json';
	import { SectionWrapper, DraggableContainer } from '$components';

	interface Service {
		title: string;
		copy: string;
		iconsList: string[];
	}
	interface Reason {
		heading: string;
		reason: string;
	}
</script>

<!-- Generate Cards -->
{#snippet serviceCards(list: { services: Service[] })}
	{#if !list.services || list.services.length === 0}
		<p class="text-center">No services available at the moment.</p>
	{/if}
	{#each list.services as { title, copy, iconsList }, index ('card-' + index)}
		<article class="draggableItem hoverTransition">
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
		</article>
	{/each}
{/snippet}

{#snippet reasons(list: { reasons: Reason[] })}
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
			class="servicesContainer"
		>
			{@render serviceCards(services)}
		</DraggableContainer>
		<h3 class="mt-5 mb-4 text-center">✅ Why Choose Me?</h3>
		{@render reasons(services)}
	</div>
</SectionWrapper>
