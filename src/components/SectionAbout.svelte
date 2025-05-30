<script>
	import { darkTheme } from '$data/sharedState.js';
	const color = $derived($darkTheme ? 'warning' : 'primary');

	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/js/dist/modal.js');
	});

	import StatsCounter from './StatsCounter.svelte';
	import SkillLevels from './SkillLevels.svelte';
</script>

<section id="about" class="section about" data-bs-theme={$darkTheme ? 'dark' : 'light'}>
	<div class="container">
		<div class="heading-container">
			<h2 class="section-heading">
				<svg class="icon user-icon">
					<use xlink:href="/src/assets/icons.svg#user-icon"></use>
				</svg>
				About Me
			</h2>
		</div>

		<div class="row justify-content-center">
			<div class="col-2 col-lg-2">
				<button
					type="button"
					class="profile-image border-0 bg-transparent p-0"
					data-bs-toggle="modal"
					data-bs-target="#profile-picture"
					title="Saqib Islam: Profile Photo"
				>
					<img
						src="/src/assets/profile-thumb.webp"
						class="img-fluid profile rounded-3 shadow-sm border border-{color}-subtle"
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
									<img
										src="/src/assets/profile.webp"
										class="img-fluid rounded-bottom-3"
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
					I have a solid grasp of UX design principles and a talent for creating user focused
					interfaces, I blend creativity with technical expertise in every project, whether it's
					website development, cross-platform mobile app development, or digital marketing. I am
					certified by Google, Meta, IBM among others.
				</p>
			</div>
		</div>

		<StatsCounter />
		<SkillLevels />
	</div>
</section>

<style lang="scss">
	.profile {
		&:hover {
			transform: scale(1.05);
			transition: var(--transition);
		}
	}
</style>
