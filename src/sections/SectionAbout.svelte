<script>
	import { SectionWrapper, StatsCounter, SkillLevels } from '$components';

	import profileThumb from '$assets/profile-thumb.webp';
	import avatar from '$assets/profile.webp';

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
					title="Saqib Islam: Profile Photo"
				>
					<img
						src={profileThumb}
						class="img-fluid profile rounded-3 shadow-sm"
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
										src={avatar}
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
</SectionWrapper>

<style>
	.profile:hover {
		transform: scale(1.02);
		transition: var(--transition);
	}
	.profile {
		border: 1px solid var(--bs-tertiary-color);
	}
</style>
