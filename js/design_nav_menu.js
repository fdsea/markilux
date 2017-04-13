(function(){
let btn = document.querySelector('.design_button_nav '),
	li = document.querySelectorAll('.li'),
	//fa = focument.querySelector('.design_button_nav .fa'),
	nav_panel = document.querySelector('.left');

btn.addEventListener("click",()=>{
 nav_panel.classList.toggle('active_mobile_nav_panel');
 btn.classList.toggle('active_mobile_button_design');
 //fa.classList.toggle('fa-arrow-left');
	
 });
	for(let i = 0; i < li.length;i++){
li[i].addEventListener('click',()=>{
	nav_panel.classList.remove('active_mobile_nav_panel');
	 btn.classList.remove('active_mobile_button_design');
   });
  }	
}())