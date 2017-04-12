
(function(){
$(document).ready(function() {
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
 
	
	$('.owl-carousel').owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		navText:false,
		nav: false, //Отключил навигацию
		autoplay: true, //Автозапуск слайдера
<<<<<<< HEAD
		smartSpeed: 3000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
=======
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 3000, //Время смены слайда
>>>>>>> b1c3a3e4b920477f0e15a4394aaabd1993e5ce4f
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
}());