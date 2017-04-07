


$('.owl-carousel').owlCarousel({
	  loop: true,
      dots:true,
      dots: true
    
   
	, margin: 10
	, responsiveClass: true
	, responsive: {
		0: {
			items: 1
			, nav: true
		}
		, 600: {
			items: 1
			, nav: true
		}
		, 1000: {
			items: 1
			, nav: true
			, loop: false
		}
	}
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