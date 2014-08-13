var lineCount = 1;
var lines = {};
var expandedNode;

var Line = function(len, angle, target){
    this.len = len;
    this.angle = angle;
    this.target = target;
    this.el = $('<div></div>').appendTo('body');
    this.el
        .attr('id', 'line' + lineCount)
        .addClass('linkLine')
        .css('top', $('#rootNode').offset().top + $('#rootNode').outerWidth() / 2)
        .css('left', $('#rootNode').offset().left + $('#rootNode').outerHeight())
        .css('height', this.len)
        .css('-webkit-transform', 'rotate(' + this.angle + 'deg)')
        .css('-moz-transform', 'rotate(' + this.angle + 'deg)')
        .css('-o-transform', 'rotate(' + this.angle + 'deg)')
        .css('-ms-transform', 'rotate(' + this.angle + 'deg)')
        .css('transform', 'rotate(' + this.angle + 'deg)');
    return this;
};

$('#column1 > .nodeWrapper').click(function(){
    var node = $(this);
    var toggle = node.data("nodeOpen");
    if(!toggle){
        rootNodeLink($('#rootNode'),node); 
        node.data("nodeOpen", true);  
        
    }else{
        var lineToRemove = document.getElementById(lines[node.data('col2index')]);
        lineToRemove.remove();
        node.data("nodeOpen", false);
        
    }   

    var pos = node.context.offsetTop;

});

$('#column2 > .nodeWrapper').click(function(){
    var node = $(this);
    console.log(expandedNode);
    var toggle = node.data("nodeExpanded");
    if(!toggle){
        rootNodeLink(expandedNode, node); 
        node.data("nodeExpanded", true);  
        
    }else{
        var lineToRemove = document.getElementById(lines[node.data('col2index')]);
        lineToRemove.remove();
        node.data("nodeExpanded", false);
        
    }   

    var pos = node.context.offsetTop;

});



// TODO : event handlers to fire when position changes

// TODO : redraw lines function when event fires

function rootNodeLink(origin, target) {
        lineCount++
        var originX = origin.offset().left + origin.outerWidth() / 2;
        var originY = origin.offset().top + origin.outerHeight() / 2; 

        var destX = target.offset().left - 80;
        var destY = target.offset().top + target.outerHeight() / 2;

        var length = Math.sqrt((destX - originX) * (destX - originX) 
            + (destY - originY) * (destY - originY));
    
        var angle = 180 / 3.1415 * Math.acos((destY - originY) / length);
        if(destX > originX)
            angle *= -1;
    
        var line = new Line(length, angle, target);

        lines[target.data('col2index')] = line.el[0].id
    

       
        
}

