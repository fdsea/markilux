(function () {
	"use strict";
	var field = document.querySelector('.amount_people'),
		btn = document.querySelector('.btn_order'),
		count = 0;  
	btn.addEventListener('click', ()=> {
		count++;
		field.innerHTML = count;
	});
}());