<script lang="ts">
	const currentYear = new Date().getFullYear();
	import socialLinks from '$data/socialLinks.json';
	import icons from '$assets/icons.svg';
	import logo from '$assets/logo.svg';

	// Handle Dark Mode
	import { store } from '$data/stores.svelte';
	const mode = $derived(
		store.darkMode
			? 'dark text-bg-dark text-bg-dark'
			: 'light bg-secondary-subtle text-bg-secondary-subtle'
	);
	const button = $derived(store.darkMode ? 'btn-outline-light' : 'btn-outline-dark');
</script>

<footer id="footer" class="footer bg-gradient py-5 mt-auto {mode}">
	<div class="container py-2">
		<div class="row align-items-center gap-md-0 gap-3">
			<div class="col-md-4 text-center text-lg-start">
				<img
					class="footerLogo img-fluid"
					src={logo}
					alt="Logo"
					width="900"
					height="569"
					loading="lazy"
					draggable="false"
				/>
			</div>
			<div class="col-md-4 m-0 my-4">
				<div class="h4 text-center mb-4">Say, Hello!</div>
				<ul
					id="footerSocialLinks"
					class="social-links list-unstyled d-flex flex-wrap justify-content-around gap-2"
				>
					{#each socialLinks as { name, url, title, icon }, index ('footerSocialLink-' + index)}
						<li>
							<a
								href={url}
								class="btn btn-icon {name} {button} rounded-circle shadow-none"
								{title}
								aria-label={title}
								target="_blank"
								rel="nofollow noopener noreferrer"
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
	@media (min-width: 768px) {
	.footer {
			padding-left: 5.5em;
		}
	}
	.footerLogo {
		max-width: 75%;
	}
</style>
