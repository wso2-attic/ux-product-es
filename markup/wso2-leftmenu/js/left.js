$(window).load(function(){
    var animating = false;

    $(".navigation a").click(function(e){
        e.preventDefault();

        if(animating){
            return;
        }

        var el = $(this),
            prev = $(".navigation > a:first");
        distance = el.offset().top  - $(".navigation").offset().top,
            prevNieghbour = prev.next(),
            elNieghbour = el.next().length > 0 ? el.next() : el.prev();
        isLastElClicked = el.next().length > 0 ? false : true;

        if (el.prev().length > 0) {
            animating = true;
            $.when(
                el.animate({
                    top: -distance
                }, 700)
            ).done(function () {
                    el.insertBefore(prev).removeAttr('style').addClass('active')
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
    })
})