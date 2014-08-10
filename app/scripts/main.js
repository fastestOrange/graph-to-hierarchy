'use strict';

// flags
var nodeSelected = false;

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

$predicateNode.hover(
  function() {
    var menuTip = $('<span>Expand</span>');
    menuTip.addClass('menuTip')
    $(this).append(menuTip);
    menuTip.click(function(){
    	if(!nodeSelected){
    	  menuTipClick($(this));
    	}else{
    		menuTipReset($(this));
    	}
    }); 
  }, function() {
    $( this ).find( '.menuTip' ).remove();
  }
);


var menuTipClick = function(obj){
	var selected = obj.parent().find('h4');
	obj.text('Collapse');
	selected.css('background-color', 'orange');


	// do more stuff to show new level
	nodeSelected = true;
	}

	var menuTipReset = function(obj){
		var selected = obj.parent().find('h4');
		// selected.css('background-color', 'white');
		selected.removeAttr("style")
		nodeSelected = false;
	}






















