$(() => {
    /*
    // nav 각각 내려오게 하기
    $('.nav>li').mouseover(function() {
        $(this).children('.submenu').stop().slideDown();
    });
    $('.nav>li').mouseout(function() {
        $(this).children('.submenu').stop().slideUp();
    });
    */

    // nav 전체가 내려오게 하기
    $('.nav').mouseover(function() {
        $('.submenu').stop().slideDown();
    });
    $('.nav').mouseout(function() {
        $('.submenu').stop().slideUp();
    });

    setInterval(slide, 2000);

    let x = $('#imgslide>div');
    function slide() {
        if(parseInt(x.css('left')) == -2000) {  
            x.animate({left: '-=1000px'}, function() {
                x.css('left', 0);
            })
        } else {
            x.animate({left:'-=1000px'})
        }    
    }
})