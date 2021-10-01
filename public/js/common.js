"use strict";

const JSCCommon = {
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},

};

// const $ = jQuery;

function eventHandler() {

	JSCCommon.heightwindow();


	// function setFixedNav() {
	// 	let topNav = document.querySelector('.top-nav  ');
	// 	if (!topNav) return;
	// 	window.scrollY > 0
	// 		? topNav.classList.add('fixed')
	// 		: topNav.classList.remove('fixed');
	// }

	// function whenResize() {
	// 	setFixedNav();
	// }

	// window.addEventListener('scroll', () => {
	// 	setFixedNav();

	// }, { passive: true })
	// window.addEventListener('resize', () => {
	// 	whenResize();
	// }, { passive: true });

	// whenResize();

	const swiper = new Swiper('.headerBlock .mySwiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		},

		navigation: {
			nextEl: '.headerBlock .swiper-button-next',
			prevEl: '.headerBlock .swiper-button-prev',
		},
	});


	// список данных
	// fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')  
	// .then(
	// 	function(response) {
	// 		if (response.status !== 200) {  
	// 			console.log('0' +  
	// 				response.status);
	// 			return;
	// 		}
	// 		// Examine the text in the response  
	// 		response.json().then(function(data) {  
	// 			console.log(data);  
	// 		});
	// 	}
	// )
  // .catch(function(err) {  
  //   console.log('Fetch Error :-S', err);  
  // });
}
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
