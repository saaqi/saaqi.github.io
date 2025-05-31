<script>
	import { menuExpanded } from '$data/sharedState.js';
	import navigationLinks from '$data/navigationLinks.json';
	import icons from '$assets/icons.svg';
	import { darkTheme } from '$data/sharedState.js';

	const onclick = () => menuExpanded.set(!$menuExpanded);
	const close = () => menuExpanded.set(false);
</script>

<header id="header" class={$menuExpanded ? 'mobile-nav-active' : ''} data-bs-theme={$darkTheme ? 'dark' : 'light'}>
	<div class="header d-flex flex-column justify-content-center {$darkTheme ? 'dark' : 'light'}">
		<button
			type="button"
			class="mobile-nav-toggle rounded-circle fs-1 shadow-sm p-1 btn btn-icon {$darkTheme
				? 'btn-outline-warning'
				: 'btn-outline-primary'}"
			title="Navigation Menu"
			aria-label="Navigation Menu"
			aria-controls="navbar"
			{onclick}
		>
			<svg class="icon menu-icon">
				<use xlink:href="/src/assets/icons.svg#{$menuExpanded ? 'close' : 'menu'}-icon"></use>
			</svg>
		</button>
		<nav id="navbar" class="navbar nav-menu {$menuExpanded ? '' : 'nav-visibility'}">
			<ul id="mainNavigation" class="mainNavigation list-unstyled">
				{#each navigationLinks as { link, text, icon }, index ('navlinks-' + index)}
					<li>
						<a
							href={link}
							class="link-nav btn btn-outline-primary shadow-sm scrollto {$darkTheme
								? 'border-warning-subtle text-warning'
								: 'border-primary-subtle'}"
							title={text}
							onclick={close}
						>
							<svg
								style="--icon-fill: var({$darkTheme ? '--bs-warning' : '--bs-body'})"
								class="icon ${icon}"
							>
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
		transition: var(--transition);
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

		> ul {
			> li {
				position: relative;
				white-space: nowrap;
			}
		}

		a {
			line-height: normal;
			display: flex;
			align-items: center;
			padding: 1em;
			margin-bottom: 0.5em;
			border-radius: 5em;
			transition: var(--transition);
			height: 3.5em;
			width: 100%;
			overflow: hidden;

			svg.icon {
				font-size: calc(3.5em / 2);
			}

			span.text-nav {
				padding-left: 0.8em;
			}

			&:hover {
				width: 100%;
			}

			&:hover span.text-nav {
				display: block;
			}
		}
	}

	@media (min-width: 768px) {
		.nav-menu {
			a {
				width: 3.5em;

				svg.icon {
					margin: 0 auto;
				}

				span.text-nav {
					display: none;
				}
			}
		}
	}

	.mobile-nav-toggle {
		left: 12px;
		position: fixed;
		top: 12px;
		z-index: 1050;

		svg.icon {
			transition: transform ease-in-out 0.3s;
		}
	}

	.mobile-nav-active .header {
		overflow: hidden;

		.mobile-nav-toggle {
			font-size: 3em;

			svg.icon {
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
		}
		.header.dark {
			border-right: 1px solid var(--bs-warning-border-subtle);
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
		}
		.mobile-nav-active::before {
			background: rgba(var(--bs-dark-rgb), 0.9);
			content: '';
			height: 100vh;
			left: 0;
			position: fixed;
			top: 0;
			width: 100vw;
			z-index: 3;
		}
	}
</style>
