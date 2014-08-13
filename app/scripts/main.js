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
$nodeWrapper.on('click', function(e){
  var previousOffsetTop = e.currentTarget.offsetTop;
	$(this).next().slideToggle(function(){
      $nodeWrapper.trigger("testEvent");
  });

});



// predicate Nodes

$predicateNode.data('selected', false);

$predicateNode.hover(
  function() {
    var selectedNode = $(this)
    var menuTip = $('<span>Expand</span>').appendTo(selectedNode);
    menuTip.addClass('menuTip');
    // selectedNode.append(menuTip);
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

// $('#column1 > .nodeWrapper').click(function(){
//     var node = $(this);
//     var toggle = node.data("nodeOpen");
//     if(!toggle){
//         rootNodeLink($('#rootNode'),node); 
//         node.data("nodeOpen", true);  
        
//     }else{
//         var lineToRemove = document.getElementById(lines[node.data('col2index')]);
//         lineToRemove.remove();
//         node.data("nodeOpen", false);
        
//     }   
//     var pos = node.context.offsetTop;

// });

var menuTipClick = function(obj){
	var selected = obj.parent().find('h4');
  expandedNode = selected;
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
















