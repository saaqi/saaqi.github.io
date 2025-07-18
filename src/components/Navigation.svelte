<script lang="ts">
	import { page } from '$app/state';
	import icons from '$assets/icons.svg';
	import { onNavigate } from '$app/navigation';
	import { store } from '$data/stores.svelte.js';
	import { navigationLinks } from '$data/navigationLinks.js';

	const mode = $derived(store.darkMode ? 'dark' : 'light');
	const btn1 = $derived(store.darkMode ? 'btn-outline-light' : 'btn-outline-dark');
	const btn2 = $derived(store.darkMode ? 'btn-secondary' : 'btn-primary');

	let menuExpanded: boolean = $state(false);

	const menuIcon = $derived(menuExpanded ? `${icons}#close-icon` : `${icons}#menu-icon`);
	const onclick = () => (menuExpanded = !menuExpanded);
	const close = () => (menuExpanded = false);

	// Scroll spy functionality -----------------
	let activeSection: string = $state('');

	$effect(() => {
		// Re-run when route changes
		if (page.route.id === '/') {
			// Get all sections that have data-scroll-spy attribte
			const sections = document.querySelectorAll('[data-scroll-spy]');

			// Intersection Observer options
			const observerOptions = {
				root: null,
				rootMargin: '-20% 0px -100% 0px',
				threshold: 0
			};

			// Create intersection observer
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.getAttribute('data-scroll-spy');
						activeSection = sectionId || '';
					}
				});
			}, observerOptions);

			// Observe all sections
			sections.forEach((section) => observer.observe(section));
			// Cleanup function
			return () => {
				if (observer) observer.disconnect();
			};
		} else {
			// If not on home page, set active section
			activeSection = page.route.id?.replace('/', '') || '';
		}
	});

	// Route Animation
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		// Prevent animation if navigating to the same URL
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) {
			return;
		}
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<header
	class={menuExpanded ? 'mobile-nav-active' : ''}
	data-bs-theme={store.darkMode ? 'dark' : 'light'}
>
	{#if menuExpanded}
		<button class="mobile-nav-overlay" onclick={close} tabindex="0" aria-label="overlay"></button>
	{/if}

	<div id="header" class="header d-flex flex-column justify-content-center {mode}">
		<button
			type="button"
			class="mobile-nav-toggle rounded-circle fs-1 shadow-sm p-1 btn btn-icon {btn2}"
			title="Navigation Menu"
			aria-label="Navigation Menu"
			aria-controls="navbar"
			{onclick}
		>
			<svg class="icon menu-icon"><use xlink:href={menuIcon}></use></svg>
		</button>
		<!-- { .nav-visibility : "keeps from purging"} -->
		<nav id="navbar" class="navbar nav-menu" class:nav-visibility={!menuExpanded}>
			<ul id="mainNavigation" class="mainNavigation list-unstyled">
				{#each navigationLinks as { link, text, icon, target }, index ('navlinks-' + index)}
					<li class="item-nav" data-target={target}>
						<!-- { .active : "keeps from purging"} -->
						<a
							href={link}
							class="link-nav btn {btn1} shadow-sm scrollto"
							class:active={target === activeSection}
							title={text}
							onclick={close}
						>
							<svg class="icon {icon}">
								<use xlink:href={icons + '#' + icon}></use>
							</svg>
							<span class="text-nav">{text}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	.mobile-nav-active {
		.header {
			left: 0;
		}
	}
	.header {
		bottom: 0;
		left: 0;
		overflow-y: auto;
		padding: 1em;
		position: fixed;
		top: 0;
		z-index: 1049;
		transition: all ease-in-out 0.2s;
	}

	@media (min-width: 768px) {
		.mobile-nav-toggle {
			display: none;
		}
	}

	/* Desktop Navigation */
	.nav-menu {
		padding: 0;
		display: block;
	}
	.item-nav {
		position: relative;
		white-space: nowrap;
	}
	.link-nav {
		display: flex;
		align-items: center;
		padding: 1em;
		margin-bottom: 0.5em;
		border-radius: 5em;
		transition: all ease-in-out 0.2s;
		height: 3.5em;
		width: 100%;
		overflow: hidden;

		.icon {
			font-size: calc(3.5em / 2);
		}

		.text-nav {
			padding-left: 0.8em;
		}

		&:hover {
			width: 100%;
		}

		&:hover .text-nav {
			display: block;
		}
	}

	@media (min-width: 768px) {
		.link-nav {
			width: 3.5em;

			.icon {
				margin: 0 auto;
			}

			.text-nav {
				display: none;
			}
		}
	}

	.mobile-nav-toggle {
		left: 12px;
		position: fixed;
		top: 12px;
		z-index: 1050;

		.icon {
			transition: transform ease-in-out 0.3s;
		}
	}

	.mobile-nav-active .header {
		overflow: hidden;

		.mobile-nav-toggle {
			font-size: 3em;

			.icon {
				transform: rotate(90deg);
			}
		}
	}

	@media (max-width: 767px) {
		.header {
			display: none;
			width: 20em;
			background: var(--bs-body-bg);
			border-right: 1px solid var(--bs-primary-border-subtle);
			left: -20em;
			z-index: 4;
		}
		.header.dark {
			border-right: 1px solid var(--bs-tertiary-color);
		}
		.mobile-nav-active .header {
			left: 0;
			box-shadow: 2px 0 4px rgba(#333, 0.3);
		}
		.navbar.nav-visibility {
			visibility: hidden;
			display: none;
		}
		.mobile-nav-toggle {
			display: block;
			z-index: 5;
		}

		.mobile-nav-overlay {
			background: rgba(var(--bs-dark-rgb), 0.95);
			height: 100vh;
			left: 0;
			position: fixed;
			top: 0;
			width: 100vw;
			z-index: 3;
		}
	}

	/* Slide Trasnitions to the Navigation
	------------------------------------ */
	::view-transition-old(root),
	::view-transition-new(root) {
		animation-duration: 0.2s;
		animation-timing-function: ease-in;
	}

	::view-transition-old(root) {
		animation-name: slide-out-left;
	}

	::view-transition-new(root) {
		animation-name: slide-in-right;
	}

	/* Slide Out to Left */
	@keyframes slide-out-left {
		from {
			transform: translateY(0%);
			opacity: 1;
		}
		to {
			transform: translateY(-10%);
			opacity: 0;
		}
	}

	/* Slide In from Right */
	@keyframes slide-in-right {
		from {
			transform: translateY(10%);
			opacity: 0;
		}
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}
</style>
