<script>
	// Initial layout component for the application
	const { children } = $props();

	// Importing global styles
	import '/src/app.scss';

	// Import Components
	import { LoadingAnimation, TopLink, Navigation, ThemeSwitcher, Footer } from '$components';

	// Handle Dark Mode
	import { store } from '$data/stores.svelte.js';
	const mode = $derived(store.darkMode ? 'dark' : 'light');

	// Canonical URL for SEO
	import { page } from '$app/state';
	import { data } from '/src/app.js';
	const baseUrl = data.baseURL;
</script>

<svelte:head>
	<meta name="theme-color" content={store.darkMode ? '#212529' : '#ffffff'} />
	<link
		rel="canonical"
		href={page.url.href.startsWith(baseUrl) ? page.url.href : baseUrl + page.url.pathname}
	/>
</svelte:head>

<Navigation homePage={page.url.pathname === '/'} />
<main id="main" class="main-container {mode}" data-bs-theme={mode}>
	<LoadingAnimation />
	<ThemeSwitcher />
	{@render children()}
	<TopLink />
</main>
<Footer />
