<script lang="ts">
	import icons from '$assets/icons.svg';
	import { store } from '$data/stores.svelte.js';

	// Define Props
	interface Props {
		id: string;
		icon?: string;
		title?: string;
		hideHeading?: boolean;
		children: import('svelte').Snippet;
		[key: string]: unknown;
	}
	const { id = '', icon = '', title = '', hideHeading = false, children, ...props }: Props = $props();
</script>

{#snippet headingContainer()}
	<div class="container">
		<div class="row">
			<div class="heading-container">
				<h2 class="section-heading">
					<svg class="icon {icon}">
						<use xlink:href={icons + '#' + icon}></use>
					</svg>
					{title}
				</h2>
			</div>
		</div>
	</div>
{/snippet}

<!-- { .d-flex .flex-column .section .dark .light : "keeps from purging"} -->
<section
	{id}
	data-scroll-spy={id}
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

<style lang="scss">
	.section {
		display: flex;
		justify-content: center;
		padding: 5rem 0;
		min-height: 75svh;
	}

	@media (max-width: 992px) {
		.section {
			min-height: 100svh;
		}
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
