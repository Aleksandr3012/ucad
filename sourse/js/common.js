"use strict";
// const $ = jQuery;
function eventHandler() {

	function getFromAPI(url, callback) {
		var obj;

		fetch (url)
			.then(res => res.json())
			.then(data => obj = data)
			.then(() => callback(obj));
	}

	const createItem = data => {
		const card = `
								<div class="headerBlock__imgWrap">
									<img src="${data?.image?.url}" alt="${data?.name}" width="${data?.image?.width}}" height="${data?.image?.height}" loading="lazy">
								</div>
								<div class="headerBlock__txt">${data?.life_span}</div>
								<div class="headerBlock__title">${data?.bred_for}</div>
								<p>${data?.name}</p>`

		const liParrent = document.createElement('div');
		liParrent.className = 'swiper-slide',
		liParrent.innerHTML = card;
		return liParrent;
	};

	function drawList (arrOfObjs) {
		arrOfObjs.map(item => {
			return document.querySelector('#testList').append(createItem(item));
		});
	}

	getFromAPI('https://api.thedogapi.com/v1/breeds?limit=10&page=0', drawList);

	const swiper = new Swiper('.headerBlock__slider--js', {
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
		pagination: {
			el: ".swiper-pagination",
			type: 'bullets',
		},
	});

}
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
