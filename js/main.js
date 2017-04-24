
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
	
	$('.carousel_section').owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		navText: false,
		nav: false, //Отключил навигацию
		autoplay: true, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 3000, //Время смены слайда
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
    $('.our_job_carousel').owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		navText: true,
		nav: true, //Отключил навигацию
		autoplay: true, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 5000, //Время смены слайда
		autoplayHoverPause: false, 
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});
    
    
       $('.slider_1').owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		navText: false,
		nav: false,
        lazyLoad: true,
		autoplay: true, //Автозапуск слайдера
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 120000, //Время смены слайда
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
	
    
        $('.carousel_feedback_section').owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		navText: false,
		nav: false, //Отключил навигацию
		//autoplay: true, //Автозапуск слайдера
		smartSpeed: 500, //Время движения слайда
		autoplayTimeout: 3000, //Время смены слайда
		//autoplayHoverPause: false, 
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
    
    $("a.our_job_gallery").fancybox(
			{						
          "padding" : 5,
          "imageScale" : false, 
			"zoomOpacity" : false,
			"zoomSpeedIn" : 1000,	
			"zoomSpeedOut" : 1000,	
			"zoomSpeedChange" : 1000, 
			"frameWidth" : 700,	 
			"frameHeight" : 600, 
			"overlayShow" : true, 
			"overlayOpacity" : 0.8,	
			"hideOnContentClick" :false,
			"centerOnScroll" : false
				
			});
	

function toggleTabs() {
	var li = document.querySelectorAll('.li'),
	    slider_design = document.querySelectorAll('.slider_design'),
	    side_arrow = document.querySelectorAll('.side_arrow');

	var _loop = function _loop(i) {
		li[i].addEventListener('click', function () {
			for (var j = 0; j < slider_design.length; j++) {
				li[j].classList.remove('active_tabs_design');
				side_arrow[j].classList.remove('active_arrow_design');
				slider_design[j].classList.remove('active_slider_design');
			}
			li[i].classList.add('active_tabs_design');
			side_arrow[i].classList.add('active_arrow_design');
			slider_design[i].classList.add('active_slider_design');
		});
	};

	for (var i = 0; i < li.length; i++) {
		_loop(i);
	}
}
toggleTabs();

}());