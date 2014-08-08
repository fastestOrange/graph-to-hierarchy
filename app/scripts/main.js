'use strict';

// Cached Selectors

var $filterBox = $('.filterBox');
var $arrow = $('.arrow');
var $openNode = $('.openNode');

// on load
$filterBox.find('ul').toggle();
$openNode.hide();

// filterbox slidedown
$filterBox.on('click', function(){
	$(this).find('ul').slideToggle({
		duration: 'fast',
		easing: 'linear'
	});
});


// node slie down
$arrow.on('click', function(){
	console.log("hey");
	$(this).parent().next().slideToggle();
});