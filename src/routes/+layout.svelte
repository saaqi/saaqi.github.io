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
	import { darkTheme } from '$data/sharedState.js';
</script>


<Navigation />
<main id="main" class="main-container" data-bs-theme={$darkTheme ? 'dark' : 'light'}>
	<LoadingAnimation />
	<ThemeSwitcher />
	{@render children()}
	<TopLink />
</main>
