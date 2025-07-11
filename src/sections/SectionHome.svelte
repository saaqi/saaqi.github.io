<script lang="ts">
	import icons from '$assets/icons.svg';
	import heroSvg from '$assets/hero.svg';
	import { store } from '$data/stores.svelte';
	import { SectionWrapper } from '$components';
	import socialLinks from '$data/socialLinks.json';
	import resume from '$assets/resume-saqib-islam.pdf';

	const mode = $derived(store.darkMode ? 'dark' : 'light');
	const btn1 = $derived(store.darkMode ? 'btn-secondary' : 'btn-primary');
	const btn2 = $derived(store.darkMode ? 'btn-outline-secondary' : 'btn-outline-primary');
</script>

<SectionWrapper id="home" class="py-5" minHeight="svh100">
	{#snippet headingContainer()}
		<div class="container">
			<div class="row">
				<div class="heading-container">
					<h2 class="section-heading">
						<svg class="icon {mode}">
							<use xlink:href={icons + '#' + mode}></use>
						</svg>
						Welcome to My Portfolio
					</h2>
				</div>
			</div>
		</div>
	{/snippet}
	<div class="container position-relative text-body">
		<div class="row flex-lg-row-reverse align-items-center gap-5 gap-lg-0">
			<div class="graphic-col col-lg-6">
				<img
					class="hero-graphic img-fluid"
					src={heroSvg}
					alt="Hero Graphic"
					draggable="false"
					fetchpriority="high"
					height="504"
					width="702"
				/>
			</div>
			<div class="text-col d-flex flex-column gap-2 text-center text-lg-start col-lg-6 fw-medium">
				<p class="mb-0">Hi there, I'm</p>
				<h1 class="hero-heading display-1 fw-bold">Saqib Islam</h1>
				<p class="intro mb-0">
					Combining full-stack web development, intuitive UI/UX design, and strategic digital
					marketing with SEO expertise, I build high-converting, sleek websites that don't just
					perform, they propel your business forward.
				</p>
				<ul
					id="heroSocialLinks"
					class="social-links list-unstyled d-flex flex-wrap gap-5 justify-content-center justify-content-lg-start my-4"
				>
					{#each socialLinks as { name, url, title, icon }, index ('homeSocialLink' + index)}
						<li>
							<a
								href={url}
								class={name}
								{title}
								aria-label={title}
								target="_blank"
								rel="nofollow noopener noreferrer"
							>
								<svg class="icon {icon} fs-4">
									<use xlink:href={icons + '#' + icon}></use>
								</svg>
							</a>
						</li>
					{/each}
				</ul>
				<div
					class="col-12 m-0 hero-buttons d-flex gap-2 justify-content-lg-start justify-content-center"
				>
					<a
						href="/contact"
						class="btn scrollto {btn1} shadow-none"
						title="Hire Me!"
						aria-label="Hire Me!"
					>
						<svg class="icon handshake-icon">
							<use xlink:href={icons + '#handshake-icon'}></use>
						</svg>
						Hire Me!
					</a>
					<a
						href={resume}
						class="btn {btn2}"
						title="Download My Resume"
						target="_blank"
						aria-label="Download My Resume!"
					>
						<svg class="icon download-icon">
							<use xlink:href={icons + '#download-icon'}></use>
						</svg>
						Resume
					</a>
				</div>
			</div>
		</div>
	</div>
</SectionWrapper>

<style lang="scss">
	:global(.home) {
		background-image: url('$assets/lined_paper.webp');
		background-repeat: repeat;
	}

	:global(.home.dark) {
		background-image: url('$assets/repeated-square-dark.webp');
	}

	.hero-buttons {
		.btn {
			width: 10em;
		}
	}

	.social-links svg.icon {
		--icon-fill: var(--bs-body-color);
		fill: var(--bs-body-color);
	}
</style>
