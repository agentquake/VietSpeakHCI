$(document).ready(function () {
    $('.next').css('opacity', '0');
    $('.micro-button').on('click', function () {
        $(this).toggleClass('hehe');
        if ($('.micro-button.hehe').length) {
            $('.next').css('opacity', '0');
        } else {
            $('.next').css('opacity', '1');
        }
    });

    $('.volume').on('click',function() {
       $(this).toggleClass('changevolume'); 
    });
});
