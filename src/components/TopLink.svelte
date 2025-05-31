<script>
	// import '$styles/toplink.scss';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import icons from '$assets/icons.svg';
	import { darkTheme } from '$data/sharedState.js';

	let show = false;
	onMount(() => {
		window.addEventListener('scroll', () => {
			window.scrollY >= 150 ? (show = true) : (show = false);
		});
	});
</script>

{#if show}
	<div class="go-top" transition:fade>
		<button
			class="top fs-4 rounded-circle p-1 btn btn-outline-{$darkTheme ? 'light' : 'secondary'}"
			title="Go to Top"
			aria-label="Go to Top"
			onclick={() => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}}
		>
			<svg class="icon top-icon">
				<use xlink:href="{icons}#top-icon"></use>
			</svg>
		</button>
	</div>
{/if}

<style>
	button {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 2;
		line-height: 0;
	}
</style>
