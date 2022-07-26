'use strict';
const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.link');

// Desktop Navigation
window.addEventListener('scroll', () => {
	let current = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (pageYOffset >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute('id');
		}
	});

	navBtns.forEach((btn) => {
		btn.classList.remove('active');
		if (btn.classList.contains(current)) {
			btn.classList.add('active');
		}
	});
});

// function removeActiveClasses() {
// 	navBtns.forEach((btn) => {
// 		btn.classList.remove('active');
// 	});
// }

// navBtns.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		removeActiveClasses();
// 		btn.classList.add('active');
// 	});
// });
