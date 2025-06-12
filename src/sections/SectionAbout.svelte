<script>
	import { SectionWrapper, StatsCounter, SkillLevels } from '$components';

	import profileThumb from '$assets/profile-thumb.webp?enhanced';
	import avatar from '$assets/profile.webp?enhanced&w=1024;512;256';

	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/js/dist/modal.js');
	});
</script>

<SectionWrapper id="about" title="About Me" icon="user-icon">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-2 col-lg-2">
				<button
					type="button"
					class="profile-image border-0 bg-transparent p-0"
					data-bs-toggle="modal"
					data-bs-target="#profile-picture"
					aria-label="Saqib Islam Avatar"
					title="Saqib Islam: Profile Photo"
				>
					<enhanced:img
						src={profileThumb}
						sizes="min(256px, 100vw)"
						class="img-fluid profile rounded-3 shadow-sm hoverTransition"
						alt="Saqib Islam Avatar"
						loading="lazy"
						draggable="false"
					/>
				</button>
				<div
					class="modal fade"
					id="profile-picture"
					tabindex="-1"
					aria-labelledby="profile-picture-label"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
						<div class="modal-content">
							<button
								type="button"
								class="btn-close align-self-end mt-2 me-2"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
							<div class="modal-body p-0">
								<div class="profile-container position-relative">
									<enhanced:img
										src={avatar}
										sizes="(min-width: 1024px) 1024px, 100vw"
										class="img-fluid rounded-3"
										id="profile-picture-label"
										alt="Saqib Islam Avatar"
										loading="lazy"
										draggable="false"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-10 col-lg-7">
				<p class="mb-0">
					As a Full-Stack Web Developer, UI/UX Designer, and Digital Marketing Strategist, my
					passion is creating powerful online presences. I focus on developing fast, beautiful, and
					SEO-optimized websites, leveraging modern frameworks like React and Svelte for dynamic
					user experiences. Additionally, I build cross-platform mobile applications with React
					Native, and create robust e-commerce solutions with platforms such as WooCommerce and
					Shopify. My goal is to help your brand connect, convert, and ultimately, thrive in the
					digital landscape.
				</p>
			</div>
		</div>

		<StatsCounter />
		<SkillLevels />
	</div>
</SectionWrapper>

<style>
	.profile {
		border: 1px solid var(--bs-tertiary-color);
	}
</style>
