<script lang="ts">
	import icons from '$assets/icons.svg';
	import { store } from '$data/stores.svelte';

	let autoTheme: boolean = $state(false);
	let autoActiveButton: string = $derived(
		autoTheme
			? store.darkMode
				? 'btn-primary'
				: 'btn-warning'
			: store.darkMode
				? 'btn-outline-dark'
				: 'btn-outline-light'
	);
	let deviceThemeDark: boolean = $state(false);

	// Initial State
	const initState = () => {
		const storedTheme = localStorage.getItem('theme');
		const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)');
		deviceThemeDark = deviceTheme.matches;
		// Listen for system theme changes
		deviceTheme.addEventListener('change', autoSetTheme);

		if (storedTheme === 'dark') store.darkMode = true;
		else if (storedTheme === 'light') store.darkMode = false;
		else {
			localStorage.setItem('theme', 'auto');
			store.darkMode = deviceThemeDark;
			autoTheme = true;
		}
	};

	// Toggle Dark Mode Button
	const toggleButton = () => {
		store.darkMode = !store.darkMode;
		localStorage.setItem('theme', store.darkMode ? 'dark' : 'light');
		autoTheme = false;
	};

	// Auto Mode Button
	const autoButton = () => {
		localStorage.setItem('theme', 'auto');
		store.darkMode = deviceThemeDark;
		autoTheme = true;
	};

	// Auto Set theme
	const autoSetTheme = () => {
		if (autoTheme) store.darkMode = deviceThemeDark;
	};
</script>

<div {@attach initState} class="switchContainer d-flex align-items-center gap-2">
	<button
		type="button"
		class="autoModeButton btn {autoActiveButton} btn-icon p-1 rounded-circle shadow-none"
		title="Automatically Select Device Prefered Color Scheme"
		aria-pressed="true"
		aria-label="Automatically Select Device Prefered Color Scheme"
		onclick={autoButton}
	>
		<svg class="icon half-circle-icon">
			<use xlink:href={icons + '#half-circle-icon'}></use>
		</svg>
	</button>
	<input
		type="checkbox"
		class="darkModeSwitcher form-check-input m-0"
		id="darkModeSwitch"
		title="Enable or Disable Dark Mode"
		onclick={toggleButton}
		aria-label="Enable or Disable Dark Mode"
		checked={store.darkMode}
	/>
</div>

<style lang="scss">
	.switchContainer {
		padding: 0.4em 0.6em;
		border-radius: 2rem;
		background-color: var(--bs-body-color);
		position: absolute;
		top: 12px;
		right: 12px;
		line-height: 1;
		z-index: 2;
	}

	.darkModeSwitcher {
		appearance: none;
		width: 2em;
		height: 1em;
		background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
		background-size: 205%;
		background-position: 0;
		transition: 0.4s;
		border-radius: 99em !important;
		position: relative;
		cursor: pointer;
		font-size: var(--toggle-size);
	}

	.darkModeSwitcher::before {
		content: '';
		width: 0.75em;
		height: 0.75em;
		position: absolute;
		top: calc(50% - (0.75em / 2));
		left: 0.1em;
		background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
		background-size: 205%;
		background-position: 100%;
		border-radius: 50%;
		-webkit-transition: 0.4s;
		-o-transition: 0.4s;
		transition: 0.5s;
	}

	.darkModeSwitcher:checked::before {
		left: calc(100% - 0.9em);
		background-position: 0;
	}

	.darkModeSwitcher:checked {
		background-position: 100%;
	}
</style>
