'use strict';

// flags

// Cached Selectors

// var $filterBox = $('.filterBox');
var $arrow = $('.arrow');
var $openNode = $('.openNode');
var $predicateNode = $('.predicateNode');
var $rootFromHere = $('.rootFromHere > a');
var $nodeWrapper = $('.nodeWrapper');



// on load
// $filterBox.find('ul').toggle();
$openNode.hide();
$rootFromHere.hide();
$('.column:eq(1)').children().hide();



// node slie down
$nodeWrapper.on('click', function(){
	$(this).next().slideToggle();
});

$('div[data-col2Index="3"]').click(function(){
	line4.y2+=465;
	line5.y2+=465;
	line6.y2+=465;
	line7.y2+=465;
	redrawLines();

})


// predicate Nodes

$predicateNode.data('selected', false);

$predicateNode.hover(
  function() {
    var menuTip = $('<span></span>');
    menuTip.addClass('menuTip');
    menuTip.text(function(){
  		var test = $(this).closest('.predicateNode');
    	if(!$(this).parent().data('selected')){
    	
    		return 'Expand'
    	}else{
    	
    		return 'Collapse';
    	}
    });
    $(this).append(menuTip);
    menuTip.click(function(){
    	if(!$(this).data('selected')){
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
	selected.css('background-color', 'orange');
	obj.parent().data('selected', true);

	// do more stuff to show new level
	
	}

	var menuTipReset = function(obj){
		var selected = obj.parent().find('h4');
		// selected.css('background-color', 'white');
		selected.removeAttr("style")
		obj.parent().data('selected', false);
	}

// RAPHAEL

// var paper = Raphael(0,90, 500, 500);

// var a = paper.path("M 183  293 L 326  230");
// var b = paper.path("M183 293L326 300");
// var c = paper.path("M183 293L326 378");


 

// drawToSecondNodes(8, 76, 7);














