/// <reference path="jquery-1.9.1.min.js" />
$(function () {
    var index;
    $('.item').hover(function () {
        index = $(this).index('.item');
        $(this).addClass('active').siblings().removeClass('active');
        var top = $(this).offset().top;
        var left = $(this).offset().left;
        var divOffest = { top: top, left: left };
        divOffest.left += $(this).width() + 30;
        $('.content').eq(index).css(divOffest).show();
    }, function () {
        setTimeout(function () {
            $('.content').eq(index).hover(function () {
                $(this).show();
                $('.item').eq(index).addClass('active').siblings().removeClass('active');
            }, function () {
                $(this).hide();
                $('.item').removeClass('active');
            });
        }, 50);
        $('.item').removeClass('active');
        $('.content').eq(index).hide();
    });

})