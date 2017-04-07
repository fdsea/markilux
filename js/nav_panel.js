//"use strict";
var navBtn = document.querySelector('.nav-btn')
	, popupNav = document.querySelector('.popup-nav')
	, stixs = document.querySelectorAll('.span');
navBtn.addEventListener('click', () => {
	popupNav.classList.toggle('active-nav');
	for (let i = 0; i < stixs.length; i++) {
		if (stixs[i].classList.contains('active-stix-' + (i + 1))) {
			stixs[i].classList.remove('active-stix-' + (i + 1));
			stixs[i].classList.add('inactive-stix-' + (i + 1));
		}
		else {
			stixs[i].classList.remove('inactive-stix-' + (i + 1));
			stixs[i].classList.add('active-stix-' + (i + 1));
		}
	}
});