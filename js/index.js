$(function () {
	var controller = new ScrollMagic.Controller();
	// wait for document ready
	// build scene
	new ScrollMagic.Scene({
		triggerElement: '.trigger1',
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: '150%', // hide 10% before exiting view (80% + 10% from bottom)
		offset: 30, // move trigger to center of element
	})
		.setClassToggle('#index1', 'visible') // add class to reveal
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: '.trigger2',
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: '150%', // hide 10% before exiting view (80% + 10% from bottom)
		offset: 30, // move trigger to center of element
	})
		.setClassToggle('#scrollBtn', 'visible') // add class to reveal
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	
});
/*
$(function () {
	$(window).scroll(function () {
		if ($(document).scrollTop() == 0) {
			$('.scroll').animate({
				opacity: 1,
			});
		}
		$('.scroll').animate({
			opacity: 0,
		});
	});
});
*/