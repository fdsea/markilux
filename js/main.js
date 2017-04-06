$('.owl-carousel').owlCarousel({
	loop: true
	, margin: 10
	, responsiveClass: true
	, responsive: {
		0: {
			items: 1
			, nav: true
		}
		, 600: {
			items: 1
			, nav: false
		}
		, 1000: {
			items: 1
			, nav: true
			, loop: false
		}
	}
})

function toggleTabs() {
	let li = document.querySelectorAll('.li')
		, slider_design = document.querySelectorAll('.slider_design');
	//, slider_content = document.querySelectorAll('slider_content');
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener('click', (e) => {
			for (let j = 0; j < slider_design.length; j++) {
				slider_design[j].classList.remove('active_slider_design');
			}
			slider_design[i].classList.add('active_slider_design');
		});
	}
}
toggleTabs();