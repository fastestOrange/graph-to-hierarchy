'use strict';

// Cached Selectors

var filterBoxHeader = $()


// EVENTS 

$('#author_button').on('click', function(e){
	e.preventDefault();
	$('#author_button').toggleClass('success');
	$('#author_node').toggleClass('active');
});

$('.filterBox_header').on('click', function(e){
	e.preventDefault();
	$('.filterBox').toggleClass('active')
});
