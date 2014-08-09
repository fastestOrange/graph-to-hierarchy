'use strict';

// Cached Selectors

var $filterBox = $('.filterBox');
var $arrow = $('.arrow');
var $openNode = $('.openNode');
var $predicateNode = $('.predicateNode');
var $rootFromHere = $('.rootFromHere > a');

// on load
$filterBox.find('ul').toggle();
$openNode.hide();
$rootFromHere.hide();

// filterbox slidedown
$filterBox.on('click', function(){
	$(this).find('ul').slideToggle({
		duration: 'fast',
		easing: 'linear'
	});
});


// node slie down
$arrow.on('click', function(){
	$(this).parent().next().slideToggle();
});

// sticky

$("#rootNode").sticky({topSpacing:20});

// predicate Nodes

$predicateNode.on("mouseenter", function(){
	$rootFromHere.show();
});