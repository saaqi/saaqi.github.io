export default function observeWhenVisible(
	callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
	options: IntersectionObserverInit = { threshold: 1.0 }
): IntersectionObserver {
	const observer = new IntersectionObserver((entries, observerInstance) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				callback(entry, observerInstance);
			}
		});
	}, options);

	return observer;
}
