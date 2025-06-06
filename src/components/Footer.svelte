<script>
	const currentYear = new Date().getFullYear();
	import socialLinks from '$data/socialLinks.json';
	import icons from '$assets/icons.svg';

	// Handle Dark Mode
	import { store } from '$data/stores.svelte.js';
	const mode = $derived(
		store.darkMode
			? 'dark text-bg-dark text-bg-dark'
			: 'light bg-secondary-subtle text-bg-secondary-subtle'
	);
	const button = $derived(store.darkMode ? 'btn-outline-light' : 'btn-outline-secondary');
</script>

<footer id="footer" class="footer bg-gradient py-5 mt-auto {mode}">
	<div class="container py-2">
		<div class="row align-items-center gap-md-0 gap-3">
			<div class="col-md-4 text-center text-lg-start">
				<img src="/favicon.svg" alt="Logo" height="150" draggable="false" />
			</div>
			<div class="col-md-4 m-0 my-4">
				<div class="h4 text-center mb-3">Say, Hello!</div>
				<ul
					id="footerSocialLinks"
					class="social-links list-unstyled d-flex flex-wrap justify-content-center gap-3"
				>
					{#each socialLinks as { name, url, title, icon }, index ('footerSocialLink-' + index)}
						<li>
							<a
								href={url}
								class="{name} {button} btn btn-icon rounded-circle shadow-none"
								{title}
								aria-label={title}
								target="_blank"
								rel="nofollow noopener"
							>
								<svg class="icon {icon}">
									<use xlink:href={icons + '#' + icon}></use>
								</svg>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="col-md-4 m-0 copyright text-center text-lg-end">
				<div class="h2">Saqib Islam</div>
				<div>
					&copy; <span id="footerYear">{currentYear}</span>
					All Rights Reserved
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.social-links .btn-icon > svg.icon {
		--icon-fill: var(--bs-btn-color);
		fill: var(--icon-fill)
	}
	.social-links .btn-icon:hover > svg.icon,
	.social-links .btn-icon:active > svg.icon {
		--icon-fill: var(--bs-btn-hover-color);
		fill: var(--icon-fill)
	}
</style>
