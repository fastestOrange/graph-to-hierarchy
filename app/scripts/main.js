'use strict';

// Cached Selectors

var $filterBoxHeader = $('.filterBox_header');

$filterBoxHeader.on('click', function(){
	console.log("hey");
	$filterBoxHeader.find('ul').toggle();	
});
