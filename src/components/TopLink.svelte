<script lang="ts">
	import icons from '$assets/icons.svg';
	import { fade } from 'svelte/transition';
	import { store } from '$data/stores.svelte';

	const button = $derived(store.darkMode ? 'btn-outline-light' : 'btn-outline-dark');
	let show: boolean = $state(false);
</script>

<svelte:window on:scroll={() => (show = window.scrollY >= 250)} />

{#if show}
	<div class="go-top" transition:fade>
		<button
			class="top fs-4 rounded-circle p-1 btn {button}"
			title="Go to Top"
			aria-label="Go to Top"
			onclick={() => window.scrollTo({ top: 0 })}
		>
			<svg class="icon top-icon">
				<use xlink:href={icons + '#top-icon'}></use>
			</svg>
		</button>
	</div>
{/if}

<style lang="scss">
	button {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 2;
		line-height: 0;
	}
</style>
