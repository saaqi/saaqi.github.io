<script>
	// Initial layout component for the application
	const { children } = $props();

	// Importing global styles
	import '/src/app.scss';

	// Supports weights 100-900
	import '@fontsource-variable/montserrat/wght.css';
	import '@fontsource-variable/montserrat/wght-italic.css';

	// Import Components
	import { LoadingAnimation, TopLink, Navigation, ThemeSwitcher, Footer } from '$components';

	// Handle Dark Mode
	import { store } from '$data/stores.svelte.js';
	const mode = $derived(store.darkMode ? 'dark' : 'light');
</script>

<svelte:head>
	<meta name="theme-color" content={store.darkMode ? '#212529' : '#ffffff'} />
</svelte:head>

<Navigation />
<main id="main" class="main-container {mode}" data-bs-theme={mode}>
	<LoadingAnimation />
	<ThemeSwitcher />
	{@render children()}
	<TopLink />
</main>
<Footer />
