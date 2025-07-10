<script lang="ts">
	// Importing global styles
	import '$styles/app.scss';

	import { appData } from '$lib';
	import { page } from '$app/state';
	import { store } from '$data/stores.svelte';
	import { LoadingAnimation, TopLink, Navigation, ThemeSwitcher, Footer } from '$components';

	// Initial layout component for the application
	interface Props {
		children: import('svelte').Snippet;
	}
	const { children }: Props = $props();

	// Handle Dark Mode
	const mode = $derived(store.darkMode ? 'dark' : 'light');

	// Canonical URL for SEO
	const baseUrl = appData.baseURL;
</script>

<svelte:head>
	<meta name="theme-color" content={store.darkMode ? '#212529' : '#ffffff'} />
	<link
		rel="canonical"
		href={page.url.href.startsWith(baseUrl) ? page.url.href : baseUrl + page.url.pathname}
	/>
</svelte:head>

<Navigation />
<main id="main" class="main-container {mode}" data-bs-theme={mode}>
	<LoadingAnimation />
	<ThemeSwitcher />
	{@render children()}
	<TopLink />
</main>
<Footer />
