'use strict';
const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.link');
const mobileNav = document.querySelector('.nav-list');
const hamburger = document.getElementById('hamburger');

const projects = document.querySelectorAll('.project');

mobileNav.style.maxHeight = '0px';

// Navigation
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

// Mobile Navigation Display
hamburger.addEventListener('click', () => {
	if (mobileNav.style.maxHeight === '0px') {
		mobileNav.style.maxHeight = 'fit-content';
		mobileNav.style.opacity = '1';
		mobileNav.style.padding = '0.5em 0';
	} else {
		mobileNav.style.maxHeight = '0px';
		mobileNav.style.opacity = '0';
		mobileNav.style.padding = '0';
	}
});
