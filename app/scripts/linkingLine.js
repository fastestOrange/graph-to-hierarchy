var lineCount = 1;
var lines = {};

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

$('.nodeWrapper').click(function(){
    var node = $(this);
    var toggle = node.data("selected");
    if(!toggle){

        // TODO: keep track of lines and nodes in lines object above

        rootNodeLink(node); 
        node.data("selected", true);  
        
    }else{
        var lineToRemove = document.getElementById(lines[node.data('col2index')]);
        lineToRemove.remove();
        node.data("selected", false);
        
    }   
});

// TODO : event handlers to fire when position changes

// TODO : redraw lines function when event fires

function rootNodeLink(target) {
        lineCount++
        var originX = $('#rootNode').offset().left + $('#rootNode').outerWidth() / 2;
        var originY = $('#rootNode').offset().top + $('#rootNode').outerHeight() / 2; 

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

