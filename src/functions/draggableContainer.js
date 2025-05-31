/**
 * Svelte 5 action that enables horizontal dragging functionality for a container element.
 *
 * @param {HTMLElement} node - The DOM element to make draggable.
 * @param {Object} [options] - Optional configuration object.
 * @param {number} [options.sensitivity=3] - Drag sensitivity multiplier.
 *
 * This action adds event listeners to the specified element to allow
 * horizontal dragging. When the user clicks and drags inside the container, the
 * container's scroll position is updated accordingly.
 *
 * The action handles the following events:
 * - `mousedown`: Initiates the dragging operation, records the starting position,
 *   and adds a 'dragging' class to the container.
 * - `mouseleave`: Ends the dragging operation and removes the 'dragging' class.
 * - `mouseup`: Ends the dragging operation and removes the 'dragging' class.
 * - `mousemove`: Updates the container's scroll position based on the mouse movement.
 *
 * Example usage in Svelte component:
 *
 * <script>
 *   import draggableContainer from './draggableContainer.js';
 * </script>
 *
 * <div use:draggableContainer class="items">
 *   <!-- Your content here -->
 * </div>
 *
 * // With options:
 * <div use:draggableContainer={{ sensitivity: 2 }} class="items">
 *   <!-- Your content here -->
 * </div>
 */

function hasTouchSupport() {
	return (
		'ontouchstart' in window || // Most browsers
		navigator.maxTouchPoints > 0 || // Modern browsers
		navigator.msMaxTouchPoints > 0 // Older IE
	);
}

export default function draggableContainer(node, options = {}) {
	// Only add drag functionality if device doesn't have touch support
	if (hasTouchSupport()) {
		return {
			destroy() { }
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