const progressBars = document.querySelectorAll('.progress-bar');
const animateWhenVisible = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const ariaValueNow = entry.target.getAttribute('aria-valuenow');
				entry.target.style.width = `${ariaValueNow}%`;
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 1.0 }
);

if (progressBars) {
	progressBars.forEach((progressBar) => {
		progressBar.style.transition = 'width ease-in 1.5s';
		animateWhenVisible.observe(progressBar);
	});
}
