'use strict';

//line

function createLine(x1,y1, x2,y2){
    var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
  var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  var transform = 'rotate('+angle+'deg)';

    var line = $('<div>')
        .appendTo('#container')
        .addClass('line')
        .css({
          'position': 'absolute',
          'transform': transform
        })
        .width(length)
        .offset({left: x1, top: y1});

    return line;
}

createLine(25,25,100,100);

// flags

var constituentsOpen = false;

// Cached Selectors

// var $filterBox = $('.filterBox');
var $arrow = $('.arrow');
var $openNode = $('.openNode');
var $predicateNode = $('.predicateNode');
var $nodeWrapper = $('.nodeWrapper');



// on load
// $filterBox.find('ul').toggle();
$('.column:eq(1)').children().hide();
$openNode.hide();



// node slie down
$nodeWrapper.on('click', function(){
	$(this).next().slideToggle();

});

$('div[data-col2Index="3"]').click(function(){
		var line3=new Line(8,76,130,168);
		secondContext.clearRect(0, 0, canvas.width, canvas.height);
            // draw the line
    line3.drawWithArrowheads(secondContext);
	
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

// RAPHAEL

// var paper = Raphael(0,90, 500, 500);

// var a = paper.path("M 183  293 L 326  230");
// var b = paper.path("M183 293L326 300");
// var c = paper.path("M183 293L326 378");


 

// drawToSecondNodes(8, 76, 7);














