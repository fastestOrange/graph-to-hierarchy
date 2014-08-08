'use strict';

// Cached Selectors

var $filterBox = $('.filterBox');

$filterBox .find('ul').hide()

$filterBox.on('click', function(){
	$(this).find('ul').slideToggle();
});
