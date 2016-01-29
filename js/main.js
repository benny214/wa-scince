$(function () {

$(".siteMenuLink").not(".siteMenuActive").hover(function () {
        $(this).parent().find("ins").stop(true, true).animate({
            marginTop: '-1px',
            opacity: '1'
        }, 250);
    }, function () {
        $(this).parent().find("ins").stop(true, true).animate({
            marginTop: '5px',
            opacity: '0'
        }, 250);
    });
}