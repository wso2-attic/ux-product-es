$(window).load(function(){

    $(".navigation").animateLeftmenu();

});



/**
* @description Random background color generator for thumbs
* @param {range} Color Range Value
* @return {Node} DOM Node
*/
(function ( $ ) {
$.fn.random_background_color = function(range){

    /*
    if(!range){
        range = 9;
    }

    return this.each(function(){
        var color = '#'+Math.random().toString(range).substr(-6);
        $(this).css('background', color);

        console.log(color);
    });
    */


        return this.each(function(){
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            $(this).css('background', color);
            console.log(color);
        });
};
}( jQuery ));



    /**
    * @description function to extract first two letters from a string
    * @options customizations on how the colors should be generated
    */

(function ( $ ) {

    $.fn.nametoChar = function( options ) {

        var settings = $.extend({
            // defaults
        }, options );

        var str = this.text();
        var str = str.split(" ");
        var firstLine = str[0].charAt(0);
        var secondLine = str[1].charAt(0).toLowerCase();
        return this.parent().parent().prev().children().text(firstLine+secondLine)

    };
}( jQuery ));



    /**
    * @description function to animate left navigation menu item activation
    * @options none
    */

(function ( $ ) {

    $.fn.animateLeftmenu = function( options ) {
        var animating = false;
        var menu = 'navigation';

        this.children("a").click(function(e){
            e.preventDefault();

            if(animating){
                return;
            }

            var el = $(this),
                prev = $("." + menu + " > a:first"),
                distance = el.offset().top  - $(".navigation").offset().top,
                isLastElClicked = el.next().length > 0 ? false : true;

            if (el.prev().length > 0) {
                animating = true;
                $.when(
                    el.animate({
                        top: -distance
                    }, 500)
                ).done(function () {
                        el.insertBefore(prev).css('top','0px').addClass('active');
                        if(isLastElClicked){
                            prev.removeClass('active');
                        }else{
                            prev.removeClass('active');
                        }
                        animating = false;
                        setTimeout(function(){
                            //location.replace(el.attr('href'));
                        },500)

                    });
            }
        });
    };
}( jQuery ));



