<script lang="ts">
	import { store } from '$data/stores.svelte.js';
	import icons from '$assets/icons.svg';
	import statCounters from '$data/statCounters.json';
	import observeWhenVisible from '../functions/observeWhenVisible.js';

	const textColor = $derived(store.darkMode ? 'text-secondary' : 'text-primary');

	// countWhenVisible.js
	function countWhenVisible(node: HTMLElement): { destroy(): void } {
		let hasCounted = false;
		let startTime: number | null = null;

		const targetCount = parseInt(node.textContent || '0', 10);
		const speed = 1500;

		node.textContent = '0';

		const observer = observeWhenVisible(
			(_, observer) => {
				if (hasCounted) return;
				hasCounted = true;

				startTime = performance.now();

				const interval = setInterval(() => {
					const elapsedTime = performance.now() - (startTime as number);
					const progress = elapsedTime / speed;

					if (progress >= 1) {
						clearInterval(interval);
						node.textContent = targetCount.toString();
					} else {
						node.textContent = Math.floor(progress * targetCount).toString();
					}
				}, 20);

				observer.unobserve(node);
			},
			{ threshold: 1.0 }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
</script>

<article class="statistics mt-5">
	<div class="heading-container">
		<h3 class="h4 text-center">
			<svg class="icon chart-icon">
				<use xlink:href={icons + '#chart-icon'}></use>
			</svg>
			My Track Record
		</h3>
	</div>
	<div id="statsCounters" class="row stats g-3 row-gap-4 mt-4">
		{#each statCounters as { header, level, title, icon }, index('stats-' + index)}
			<div class="col-lg-3 col-6 text-break">
				<div class="count-box pt-4 pb-3 px-3 text-center rounded-3 h-100 hoverTransition">
					<div
						class="stats-icon-container d-flex align-items-center justify-content-center fs-4 rounded-circle"
					>
						<svg class="icon {icon}"><use xlink:href={icons + '#' + icon}></use></svg>
					</div>
					<p class="mb-0 mt-2">{header}</p>
					<span class="fs-2 fw-bold {textColor}">
						<span class="statcounter" use:countWhenVisible>{level}</span>+
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
			border: 1px solid var(--bs-body-color);
		}
		.stats-icon-container {
			width: 3rem;
			height: 3rem;
			background-color: var(--bs-body-color);
			color: var(--bs-body-bg);
			svg.icon {
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
