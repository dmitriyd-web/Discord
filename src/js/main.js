document.addEventListener('DOMContentLoaded', function(){
	
	//  scroll

	let scrollpos = window.scrollY

	const header = document.querySelector("header")
	const scrollChange = 1

	const add_class_on_scroll = () => header.classList.add("header-white")
	const remove_class_on_scroll = () => header.classList.remove("header-white")

	window.addEventListener('scroll', function() {
		scrollpos = window.scrollY;

		if (scrollpos >= scrollChange + 500) { add_class_on_scroll() }
		else { remove_class_on_scroll() }
	  
	})
	
	//	mobile menu
	$(".burger-menu").on("click", function(){
		if ( $(".site-header").hasClass("open-menu") ) {
			$(".site-header").removeClass("open-menu")
			$(".site-header").removeClass("header-white")
		}	else {
			$(".site-header").addClass("open-menu")
			$(".site-header").addClass("header-white")
		}
	})
	
	//	close mobile menu
	$(".header-link").on("click", function(){
		$(".site-header").removeClass("open-menu")
		$(".site-header").removeClass("header-white")
	})
	
	//	animation
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smoot: 1.5,
		effects: true,
		once: true 
	})
	if ( window.innerWidth <= 1200 ) {
		let showFromLeft = gsap.utils.toArray('.primary-content, .about-item__1')

		showFromLeft.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
		
		
		let showFromRight = gsap.utils.toArray('.about-item__2')
		showFromRight.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
		
		let showFromBottom = gsap.utils.toArray('.about-item__3, .accordion')
		showFromBottom.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-550',
					end: '-500',
					scrub: true,
					once: true 
				}
			})
		})
	}
	
	
	
	
	//	accordion
	$(".accordion-title").on("click", function(){
		if ( $(this).parent(".accordion-question").hasClass("open") ) {
			$(this).parent(".accordion-question").removeClass("open")
		}	else {
			$(".accordion-question").removeClass("open")
			$(this).parent(".accordion-question").addClass("open")
		}
	})
	
	//	main-slider
	const reviewsSliderExists = document.querySelector(".reviews-slider")
	if ( reviewsSliderExists ) {
		const reviewsSlider = new Swiper('.reviews-slider', {
			// Optional parameters
			slidesPerView: 1,
		    spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: '.reviews-slider-pagination__btn--next',
				prevEl: '.reviews-slider-pagination__btn--prev',
			},
		});
		//$(".slider-pagination__btn--next").click()
	}
})