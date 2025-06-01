<script>
	// Initial layout component for the application
	const { children } = $props();

	// Importing global styles
	import '/src/app.scss';

	// Supports weights 100-900
	import '@fontsource-variable/montserrat/wght.css';
	import '@fontsource-variable/montserrat/wght-italic.css';

	// Import Components
	import { LoadingAnimation, TopLink, Navigation, ThemeSwitcher } from '$components';

	// Handle Dark Mode
	import { store } from '$data/stores.svelte.js';
</script>

<Navigation />
<main
	id="main"
	class="main-container"
	class:dark={store.darkMode}
	data-bs-theme={store.darkMode ? 'dark' : 'light'}
>
	<LoadingAnimation />
	<ThemeSwitcher />
	{@render children()}
	<TopLink />
</main>
