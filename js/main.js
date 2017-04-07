


$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1
		navText:false,
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
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