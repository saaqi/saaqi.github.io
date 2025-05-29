<script>
	import heroSvg from '$assets/hero.svg';
	import iconsSvg from '$assets/icons.svg';
	import resume from '$assets/resume-saqib-islam.pdf';
	import { darkTheme } from '$data/sharedState.js';
	import socialLinks from '$data/socialLinks.json';
</script>

<section id="home" class="section home" data-bs-theme={$darkTheme ? 'dark' : 'light'}>
	<div class="container position-relative text-body">
		<div class="row flex-lg-row-reverse align-items-center gap-5 gap-lg-0">
			<div class="graphic-col col-lg-6">
				<img
					class="hero-graphic"
					src={heroSvg}
					alt="Hero Graphic"
					draggable="false"
					fetchpriority="high"
				/>
			</div>
			<div class="text-col d-flex flex-column gap-2 text-center text-lg-start col-lg-6 fw-medium">
				<p class="mb-0">Hi there, I'm</p>
				<h1 class="hero-heading display-3 fw-bold">Saqib Islam</h1>
				<p class="mb-0">
					A Front-end Web Developer, UI/UX Designer, SEO Specialist and Digital Marketing Expert. I
					specialize in creating custom tailored solutions to help you achieve your goals. Let's
					build your online presence together!
				</p>
				<ul
					id="heroSocialLinks"
					class="social-links list-unstyled d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start my-4"
				>
					{#each socialLinks as { name, url, title, icon }, index ('homeSocialLink' + index)}
						<li>
							<a
								href={url}
								class={name}
								{title}
								aria-label={title}
								target="_blank"
								rel="nofollow noopener"
							>
								<svg class="icon {icon} fs-4" style="--icon-fill: var(--bs-body-color)">
									<use xlink:href={iconsSvg + '#' + icon}></use>
								</svg>
							</a>
						</li>
					{/each}
				</ul>
				<div
					class="col-12 m-0 hero-buttons d-flex gap-2 justify-content-lg-start justify-content-center"
				>
					<a
						href="#contact"
						class="btn {$darkTheme ? 'btn-warning' : 'btn-secondary'} scrollto"
						title="Hire Me!"
					>
						<svg class="icon handshake-icon">
							<use xlink:href="{iconsSvg}#handshake-icon"></use>
						</svg>
						Hire Me!
					</a>
					<a
						href={resume}
						class="btn {$darkTheme ? 'btn-light' : 'btn-primary'}"
						title="Download My Resume"
						target="_blank"
					>
						<svg class="icon download-icon">
							<use xlink:href="{iconsSvg}#download-icon"></use>
						</svg>
						Resume
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.home {
		background-image: url('$assets/lined_paper.webp');
		background-repeat: repeat;
		min-height: 100svh;
	}

	.hero-heading {
		color: var(--bs-primary);
	}

	.home[data-bs-theme='dark'] {
		background-image: url('$assets/repeated-square-dark.webp');
		.hero-heading {
			color: var(--bs-warning);
		}
	}

	.hero-buttons {
		.btn {
			width: 10em;
		}
	}
</style>
