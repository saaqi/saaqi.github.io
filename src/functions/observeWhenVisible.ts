export default function observeWhenVisible(
	callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
	options = { threshold: 1.0 }
) {
	const observer = new IntersectionObserver((entries, observerInstance) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				callback(entry, observerInstance);
			}
		});
	}, options);

	return observer;
}
