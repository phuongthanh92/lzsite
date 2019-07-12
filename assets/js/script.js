$(document).ready(function () {

    var header = $('#header');
    if ($(window).width() > 1200) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > header.height() ) {
                header.addClass("header--fixed");
                header.removeClass("header--default");
            } else {
                header.removeClass("header--fixed");
                header.addClass("header--default");
            }
        });
    }
    else {
        $(window).scroll(function () {
            if ($(this).scrollTop() > header.height() ) {
                header.find(".header__main").addClass("header__main--fixed");
            } else {
                header.removeClass("header__main--fixed");
            }
        });
    }

    $('#main-banner').slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false,
        fade: true,
        autoplaySpeed: 5000,
    });
});