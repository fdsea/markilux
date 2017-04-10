(function(){

"use strict";
var navBtn = document.querySelector('.nav-btn')
	, popupNav = document.querySelector('.popup-nav')
	, stixs = document.querySelectorAll('.span'),
    menu_item = document.querySelectorAll('.menu_item');
console.log(menu_item);
   for(let i = 0; i < menu_item.length;i++){
	   
       menu_item[i].addEventListener("click",()=>{
		     for(let j = 0; j < stixs.length; j++){
		  	stixs[j].classList.add('inactive-stix-' + (j + 1));
			stixs[j].classList.remove('active-stix-' + (j + 1)); 
		  } 
          popupNav.classList.remove('active-nav');
       });
   }
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
	

}())
