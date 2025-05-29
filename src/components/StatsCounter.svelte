<script>
	import { darkTheme } from '$data/sharedState.js';
	import icons from '$assets/icons.svg';
	import statCounters from '$data/statCounters.json';
	const color = $darkTheme ? 'warning' : 'primary';

	import { onMount } from 'svelte';
	onMount(() => {
		const countWhenVisible = (element, targetCount, speed) => {
			let hasCounted = false;
			let startTime = null;
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && !hasCounted) {
					hasCounted = true;
					startTime = performance.now();
					let count = 0;
					let duration = speed;
					let interval = setInterval(() => {
						let elapsedTime = performance.now() - startTime;
						let progress = elapsedTime / duration;
						if (progress >= 1) {
							clearInterval(interval);
							element.innerHTML = targetCount;
						} else {
							count = Math.floor(progress * targetCount);
							element.innerHTML = count;
						}
					}, 20);
				}
			});
			observer.observe(element);
		};
		const statsCounters = document.querySelectorAll('.statcounter');
		statsCounters.forEach((statsCounter) => {
			countWhenVisible(statsCounter, statsCounter.innerHTML, 1500);
		});
	});
</script>

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

<style lang="scss">
	.statistics {
		.count-box {
			&:hover {
				transform: scale(1.05);
				transition: var(--transition);
			}
		}
		.stats-icon-container {
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			svg {
				width: 1.5rem;
				height: 1.5rem;
			}
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
</style>
