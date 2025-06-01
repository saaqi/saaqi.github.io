<script>
	import { store } from '$data/stores.svelte.js';
	import icons from '$assets/icons.svg';
	import skillsLevel from '$data/skillsLevel.json';
	const color = $derived(store.darkMode ? 'warning' : 'primary');

	import observeWhenVisible from '../functions/observeWhenVisible.js';
	function animateProgress(node) {
		const observer = observeWhenVisible(
			(entry, observer) => {
				entry.target.style.width = `${entry.target.getAttribute('aria-valuenow')}%`;
				observer.unobserve(entry.target);
			},
			{ threshold: 1.0 }
		);

		node.style.transition = 'width ease-in 1.5s';
		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
</script>

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
						use:animateProgress
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

<style lang="scss">
	.skills {
		.progress-bar {
			width: 1px;
			height: 0.625rem;
			transition: width ease-in 1s;
		}
	}
</style>
