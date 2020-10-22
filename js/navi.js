$(function () {
	var controller = new ScrollMagic.Controller();
	// build scenes
	new ScrollMagic.Scene({ 
		triggerElement: '.home',
		duration: '200%'
	})
		.setClassToggle('.homeList', 'active') // add class toggle
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({ 
		triggerElement: '.portfolio',
		duration: '100%'
	})
		.setClassToggle('.portfolioList', 'active') // add class toggle
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	new ScrollMagic.Scene({ 
		triggerElement: '.img',
		duration: '100%'
	})
		.setClassToggle('.imgList', 'active') // add class toggle
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});