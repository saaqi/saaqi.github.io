<script lang="ts">
	import icons from '$assets/icons.svg';
	import { store } from '$data/stores.svelte.js';

	const { touchSensitivity = 2, indicators = true, children, ...props } = $props();

	/**
	 * Svelte 5 action that enables horizontal dragging functionality for a container element.
	 */
	function hasTouchSupport() {
		return (
			'ontouchstart' in window || // Most browsers
			navigator.maxTouchPoints > 0 || // Modern browsers
			navigator.msMaxTouchPoints > 0 // Older IE
		);
	}

	function draggableContainer(node, options = {}) {
		// Only add drag functionality if device doesn't have touch support
		if (hasTouchSupport()) {
			return {
				destroy() {}
			};
		}

		const { sensitivity = 3 } = options;

		let isDragging = false;
		let startX;
		let scrollLeft;

		function handleMouseDown(e) {
			isDragging = true;
			startX = e.pageX - node.offsetLeft;
			scrollLeft = node.scrollLeft;
			node.classList.add('dragging');
		}

		function handleMouseLeave() {
			isDragging = false;
			node.classList.remove('dragging');
		}

		function handleMouseUp() {
			isDragging = false;
			node.classList.remove('dragging');
		}

		function handleMouseMove(e) {
			if (!isDragging) return;
			e.preventDefault();
			const x = e.pageX - node.offsetLeft;
			const walk = (x - startX) * sensitivity;
			node.scrollLeft = scrollLeft - walk;
		}

		// Add event listeners
		node.addEventListener('mousedown', handleMouseDown);
		node.addEventListener('mouseleave', handleMouseLeave);
		node.addEventListener('mouseup', handleMouseUp);
		node.addEventListener('mousemove', handleMouseMove);

		return {
			// Update function called when parameters change
			update(newOptions = {}) {
				Object.assign(options, newOptions);
			},

			// Cleanup function called when element is removed
			destroy() {
				node.removeEventListener('mousedown', handleMouseDown);
				node.removeEventListener('mouseleave', handleMouseLeave);
				node.removeEventListener('mouseup', handleMouseUp);
				node.removeEventListener('mousemove', handleMouseMove);
				node.classList.remove('dragging');
			}
		};
	}
</script>

<div class="draggableOuterContainer {store.darkMode ? 'dark' : ''}">
	<!-- .draggableContainer, .row, .g-2, .pb-lg-0, .pb-3 : keeps from purging -->
	<div
		use:draggableContainer={{ sensitivity: touchSensitivity }}
		{...props}
		class:draggableContainer={true}
		class:row={true}
		class:g-2={true}
		class:pb-lg-0={true}
		class:pb-3={true}
	>
		{@render children()}
	</div>
	{#if indicators}
		<div class="directionIndicators d-flex justify-content-between text-primary fs-4 d-lg-none">
			<svg class="icon swipe-indicator swipe-icon text-body-tertiary">
				<use xlink:href={icons + '#swipe-icon'}></use>
			</svg>
			<svg class="icon swipe-indicator swipe-icon text-body-tertiary">
				<use xlink:href={icons + '#swipe-icon'}></use>
			</svg>
		</div>
	{/if}
</div>

<style lang="scss">
	.draggableContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;

		> :global(*) {
			flex: 0 0 33.3333333%;
		}
		@media (max-width: 992px) {
			> :global(*) {
				flex: 0 0 48%;
			}
		}
		@media (max-width: 768px) {
			> :global(*) {
				flex: 0 0 95%;
			}
		}
	}

	.draggableOuterContainer {
		position: relative;

		.directionIndicators {
			position: absolute;
			width: 100%;
			top: 50%;
			pointer-events: none;

			svg.swipe-indicator {
				// background-color: var(--bs-tertiary-bg);
				// border: 1px solid var(--bs-tertiary-color);
				// border-radius: 4.8em;
				padding: 0.2em;
				height: 1.1em;
				width: 1.1em;
			}
		}
	}

	@media (max-width: 992px) {
		.draggableContainer {
			flex-wrap: nowrap;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			-webkit-overflow-scrolling: touch;
			cursor: grab;
			user-select: none;

			&.dragging {
				cursor: grabbing;
			}
		}
	}
</style>
