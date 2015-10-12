$(window).load(function(){

    var animating = false;
    var menu = 'navigation';

    $(".navigation a").click(function(e){
        e.preventDefault();

        if(animating){
            return;
        }

        var el = $(this),
            prev = $(".navigation > a:first"),
            distance = el.offset().top  - $(".navigation").offset().top,
            isLastElClicked = el.next().length > 0 ? false : true;

        if (el.prev().length > 0) {
            animating = true;
            $.when(
                el.animate({
                    top: -distance
                }, 700)
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
});