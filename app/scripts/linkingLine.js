$('.nodeWrapper').click(function(){
var linkLine = $('<div></div>').appendTo('body');
    
linkLine
    .addClass('linkLine')
    .css('top', $('#rootNode').offset().top + $('#rootNode').outerWidth() / 2)
    .css('left', $('#rootNode').offset().left + $('#rootNode').outerHeight() / 2);

nodeLink($(this));

    
});

    
    // $(document).mousemove(linkMouseMoveEvent);

    // Cancel on right click
    // $(document).bind('mousedown.link', function(event) {
    //     if(event.which == 3) {
    //         endLinkMode();
    //     }
    // });

    // $(document).bind('keydown.link', function(event) {
    //     // ESCAPE key pressed
    //     if(event.keyCode == 27) {
    //         endLinkMode();
    //     }
    // });
// });
    
function nodeLink(target) {

        var originX = $('#rootNode').offset().left + $('#rootNode').outerWidth() / 2;
        var originY = $('#rootNode').offset().top + $('#rootNode').outerHeight() / 2; 

        console.log(target[0].offsetTop); 

        var destX = target.offset().left;

        var destY = target.offset().top + target.outerHeight() / 2;

        // console.log("Ox" + originX + ", Oy" + originY); 
        
        var length = Math.sqrt((destX - originX) * (destX - originX) 
            + (destY - originY) * (destY - originY));
    
        var angle = 180 / 3.1415 * Math.acos((destY - originY) / length);
        if(destX > originX)
            angle *= -1;
    
        $('.linkLine')
            .css('height', length)
            .css('-webkit-transform', 'rotate(' + angle + 'deg)')
            .css('-moz-transform', 'rotate(' + angle + 'deg)')
            .css('-o-transform', 'rotate(' + angle + 'deg)')
            .css('-ms-transform', 'rotate(' + angle + 'deg)')
            .css('transform', 'rotate(' + angle + 'deg)');
    
}