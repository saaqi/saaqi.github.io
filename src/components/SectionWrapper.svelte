<script>
	import { store } from '$data/stores.svelte.js';
	import icons from '$assets/icons.svg';

	const { id = '', icon = '', title = '', hideHeading = false, children, ...props } = $props();
</script>

{#snippet headingContainer()}
	<div class="container">
		<div class="row">
			<div class="heading-container">
				<h2 class="section-heading">
					<svg class="icon {icon}">
						<use xlink:href={icons + "#" + icon}></use>
					</svg>
					{title}
				</h2>
			</div>
		</div>
	</div>
{/snippet}

<!-- { .d-flex .flex-column : "keeps from purging"} -->
<section
	{id}
	class:d-flex={true}
	class:flex-column={true}
	class:section={true}
	class:dark={store.darkMode}
	class:light={!store.darkMode}
	data-bs-theme={store.darkMode ? 'dark' : 'light'}
	{...props}
>
	{#if !hideHeading}
		{@render headingContainer()}
	{/if}
	{@render children()}
</section>

<style>
	.section {
		display: flex;
		place-items: center;
		padding: 5rem 0;
		min-height: 75svh;
	}

	@media (min-width: 768px) {
		.section {
			padding-left: 5.5em;
		}
	}

	.heading-container {
		margin-bottom: 2rem;
	}

	.section-heading {
		font-weight: 600;
		text-align: center;
		padding-bottom: 1rem;
		position: relative;
	}

	.section-heading::before {
		content: '';
		position: absolute;
		display: block;
		width: 240px;
		height: 1px;
		background: var(--bs-body-color);
		bottom: 1px;
		left: calc(50% - 120px);
	}

	.section-heading::after {
		content: '';
		position: absolute;
		display: block;
		width: 80px;
		height: 3px;
		background: var(--bs-body-color);
		bottom: 0;
		left: calc(50% - 40px);
	}
</style>
