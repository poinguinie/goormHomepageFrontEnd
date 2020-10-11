$(function () {
	var controller = new ScrollMagic.Controller();
	// wait for document ready
	// build scene
	new ScrollMagic.Scene({
		triggerElement: '.trigger',
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: '100%', // hide 10% before exiting view (80% + 10% from bottom)
		offset: 30, // move trigger to center of element
	})
		.setClassToggle('#index', 'visible') // add class to reveal
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: '.trigger',
		triggerHook: 0.9, // show, when scrolled 10% into view
		duration: '100%', // hide 10% before exiting view (80% + 10% from bottom)
		offset: 30, // move trigger to center of element
	})
		.setClassToggle('#index2', 'visible') // add class to reveal
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});