var linkLine = $('<div></div>').appendTo('body');
    
    linkLine
        .addClass('linkLine')
        .css('top', $('#rootNode').offset().top + $('#rootNode').outerWidth() / 2)
        .css('left', $('#rootNode').offset().left + $('#rootNode').outerHeight() / 2);
    
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
});
    
function linkMouseMoveEvent() {
        var originX = $('#rootNode').offset().left + $('#rootNode').outerWidth() / 2;
        var originY = $('#rootNode').offset().top + $('#rootNode').outerHeight() / 2;
        
        // var length = Math.sqrt((event.pageX - originX) * (event.pageX - originX) 
        //     + (event.pageY - originY) * (event.pageY - originY));
    
        // var angle = 180 / 3.1415 * Math.acos((event.pageY - originY) / length);
        // if(event.pageX > originX)
        //     angle *= -1;
    
        // $('#new-link-line')
        //     .css('height', length)
        //     .css('-webkit-transform', 'rotate(' + angle + 'deg)')
        //     .css('-moz-transform', 'rotate(' + angle + 'deg)')
        //     .css('-o-transform', 'rotate(' + angle + 'deg)')
        //     .css('-ms-transform', 'rotate(' + angle + 'deg)')
        //     .css('transform', 'rotate(' + angle + 'deg)');
    
}