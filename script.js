'use strict';
const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.link');
const mobileNav = document.querySelector('.nav-list');
const hamburger = document.getElementById('hamburger');
const all = document.getElementById('all');
const design = document.getElementById('design');
const develop = document.getElementById('develop');
const games = document.getElementById('games');
const full_stack = document.getElementById('full-stack');
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

// ----- Portfolio Project Sort Functions ----- //

// Array of all Projects
const projectsArr = [...projects.entries()];
let projectList = [];
projectsArr.forEach((project) => {
	projectList.push([...project]);
});

// Function to Sort and display projects dynamically
function sort(projectType) {
	projectList.forEach((project) => {
		project[1].classList.contains(projectType)
			? (project[1].style.display = 'block')
			: (project[1].style.display = 'none');
	});
}

// OnClick Events calling Sort function
all.addEventListener('click', () => {
	projectList.forEach((project) => {
		project[1].style.display = 'block';
	});
});

design.addEventListener('click', () => {
	sort('design');
});

develop.addEventListener('click', () => {
	sort('develop');
});

games.addEventListener('click', () => {
	sort('games');
});

full_stack.addEventListener('click', () => {
	sort('full-stack');
});
