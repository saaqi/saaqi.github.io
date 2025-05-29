<script>
	// Initial layout component for the application
	const { children } = $props();

	// Importing global styles
	import '/src/app.scss';

	// Supports weights 100-900
	import '@fontsource-variable/montserrat/wght.css';
	import '@fontsource-variable/montserrat/wght-italic.css';

	// Import Components
	import { LoadingAnimation, TopLink, Navigation } from '$components';

	// Handle Dark Mode
	import { darkTheme } from '$data/sharedState.js';
	import { onMount } from 'svelte';
	onMount(async () => {
		document.querySelector('body').setAttribute('data-bs-theme', $darkTheme ? 'dark' : 'light');
	});
</script>

<LoadingAnimation />
<TopLink />

<Navigation />
<main id="main" class="main-container">
	{@render children()}
</main>
