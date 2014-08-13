$('.nodeWrapper').click(function(){
    var toggle = $(this).data("selected");
    var linkLine = $('<div></div>').appendTo('body');
    linkLine
        .addClass('linkLine')
        .css('top', $('#rootNode').offset().top + $('#rootNode').outerWidth() / 2)
        .css('left', $('#rootNode').offset().left + $('#rootNode').outerHeight());
    if(!toggle){
        rootNodeLink($(this)); 
        $(this).data("selected", true);  
        
    }else{
        $('.linkLine').remove();
        $(this).data("selected", false);
        
    }   
});

function rootNodeLink(target) {

        

        var originX = $('#rootNode').offset().left + $('#rootNode').outerWidth() / 2;
        var originY = $('#rootNode').offset().top + $('#rootNode').outerHeight() / 2; 

        var destX = target.offset().left - 80;
        var destY = target.offset().top + target.outerHeight() / 2;

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