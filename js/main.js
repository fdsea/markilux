
(function(){
$(document).ready(function() {
	function backgroundVideo(){
    var videobackground = new $.backgroundVideo($('#header_section'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "video/",
      "filename": "Markilux MX-1 bg",
      "types": ["mp4"],
      "preload": true,
      "autoplay": true,
      "loop": true
    });
	}
	backgroundVideo();
	
	$('.owl-carousel').owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		navText: false,
		nav: false, //Отключил навигацию
		autoplay: true, //Автозапуск слайдера
		smartSpeed: 500, //Время движения слайда
		autoplayTimeout: 1000, //Время смены слайда
		autoplayHoverPause: true, 
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
});

function toggleTabs() {
	let li = document.querySelectorAll('.li')
		, slider_design = document.querySelectorAll('.slider_design')
		, side_arrow = document.querySelectorAll('.side_arrow');
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener('click', () => {
			for (let j = 0; j < slider_design.length; j++) {
				li[j].classList.remove('active_tabs_design');
				side_arrow[j].classList.remove('active_arrow_design');
				slider_design[j].classList.remove('active_slider_design');
			}
			li[i].classList.add('active_tabs_design');
			side_arrow[i].classList.add('active_arrow_design');
			slider_design[i].classList.add('active_slider_design');
		});
	}
}
toggleTabs();
	
	
	/*--- NAV BTN ---*/
	document.addEventListener("scroll", ()=>{
		var navBtn = document.querySelector('.nav-btn'),
			pos = document.body.scrollTop;
		console.log(pos);
		if(pos > 0){
			navBtn.style.position = "fixed";
			
			navBtn.style.top = "10px";
		}else{
			navBtn.style.position="";
			navBtn.style.left = "";
			navBtn.style.top = "10px";	
		}
	});
	/*---  END  ---*/

}());