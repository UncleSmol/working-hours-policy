document.addEventListener('DOMContentLoaded', function () {
	const backToTopButton = document.getElementById('back-to-top');
	let lastScrollPosition = 0;

	// Function to handle scroll
	function handleScroll() {
		const currentScrollPosition = window.pageYOffset;

		// Show button when scrolling up and past 200px
		if (currentScrollPosition > 200) {
			if (currentScrollPosition < lastScrollPosition) {
				backToTopButton.classList.add('visible');
			} else {
				backToTopButton.classList.remove('visible');
			}
		} else {
			backToTopButton.classList.remove('visible');
		}

		lastScrollPosition = currentScrollPosition;
	}

	// Smooth scroll to top function
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	// Add event listeners
	window.addEventListener('scroll', handleScroll);
	backToTopButton.addEventListener('click', scrollToTop);
});
