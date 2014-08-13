'use strict';

//line

// flags

var constituentsOpen = false;

// Cached Selectors

// var $filterBox = $('.filterBox');
var $arrow = $('.arrow');
var $openNode = $('.openNode');
var $predicateNode = $('.predicateNode');
var $nodeWrapper = $('.nodeWrapper');



// on load
$('.column:eq(1)').children().hide();
$openNode.hide();



// node slie down
$nodeWrapper.on('click', function(){
	$(this).next().slideToggle();

});

$('div[data-col2Index="3"]').click(function(){
	
});

$('#rootNode').on('change', function(){
	console.log(this);

});



// predicate Nodes

$predicateNode.data('selected', false);

$predicateNode.hover(
  function() {
    var menuTip = $('<span></span>');
    menuTip.addClass('menuTip');
    menuTip.text(function(){
  		var test = $(this).closest('.predicateNode');
    	if(!$(this).parent().data('selected')){
    	
    		return 'Expand';
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
	$('.column:eq(1)').children().not('.openNode').show();
	// do more stuff to show new level
	
	}

	var menuTipReset = function(obj){
		var selected = obj.parent().find('h4');
		// selected.css('background-color', 'white');
		selected.removeAttr("style")
		obj.parent().data('selected', false);
	}
















