<script>
	import { darkTheme } from '$data/sharedState.js';
	import icons from '$assets/icons.svg';
	import statCounters from '$data/statCounters.json';
	import skillsLevel from '$data/skillsLevel.json';

  const color = $derived($darkTheme ? 'warning' : 'primary')
  // darkTheme.set(f)
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

		<article class="statistics mt-5">
			<div class="heading-container">
				<h3 class="h4 text-center">
					<svg class="icon chart-icon">
						<use xlink:href="/src/assets/icons.svg#chart-icon"></use>
					</svg>
					My Track Record
				</h3>
			</div>
			<div id="statsCounters" class="row stats g-3 row-gap-4 mt-4">
				{#each statCounters as { header, level, title, icon }, index (('stats-', index))}
					<div class="col-lg-3 col-6 text-break">
						<div class="count-box pt-4 pb-3 px-3 text-center border border-{color} rounded-3 h-100">
							<div
								class="stats-icon-container d-flex align-items-center justify-content-center fs-4 bg-{color} text-bg-{color} rounded-circle"
							>
								<svg class="icon {icon}"><use xlink:href={icons + '#' + icon}></use></svg>
							</div>
							<p class="mb-0 mt-2">{header}</p>
							<span class="fs-2 fw-bold text-{color}">
								<span class="statcounter">{level}</span>+
							</span>
							<p class="mb-0">{title}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<article class="expertise mt-5">
			<div class="heading-container">
				<h3 class="h4 text-center">
					<svg class="icon coding-icon">
						<use xlink:href="/src/assets/icons.svg#coding-icon"></use>
					</svg>
					My Skills
				</h3>
			</div>

			<div id="skillLevelBars" class="row g-3 skills">
				{#each skillsLevel as { title, level, icon }, index ('skills' + index)}
					<div class="col-6 progress d-block h-auto bg-transparent">
						<div class="skill pb-2 fs-6 fw-medium">
							<svg class="icon {icon}"><use xlink:href={icons + '#' + icon}></use></svg>
							{title}
							<!-- <span class="val">${level}%</span> -->
						</div>
						<div class="progress-bar-wrap bg-{color}-subtle rounded-pill">
							<div
								class="progress-bar bg-{color} rounded-pill"
								role="progressbar"
								aria-label="{title} Skill"
								aria-valuenow={level}
								aria-valuemin="0"
								aria-valuemax={level}
							></div>
						</div>
					</div>
				{/each}
			</div>
		</article>
	</div>
</section>

<style lang="scss">
	.profile {
		&:hover {
			transform: scale(1.05);
			transition: var(--transition);
		}
	}
	.stats {
		.count-box {
			position: relative;

			.stats-icon-container {
				position: absolute;
				top: -25px;
				left: 50%;
				height: 50px;
				width: 50px;
				transform: translateX(-50%);
			}
		}
	}

	.skills {
		.progress-bar {
			width: 1px;
			height: 0.625rem;
			transition: width ease-in 1s;
		}
	}
</style>
