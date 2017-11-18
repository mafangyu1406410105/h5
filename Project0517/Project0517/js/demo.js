/// <reference path="jquery-1.10.2.min.js" />
$(function () {
    $('.pic ul li').mouseover(function () {
        $(this).stop(true).animate({ width: '789px' }, 1000).siblings().stop(true)
        .animate({ width: '100px' }, 1000);
    });
})