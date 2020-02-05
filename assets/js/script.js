$(document).ready(function() {

    new WOW().init();

    $(".plan-carousel").owlCarousel({
        autoplay: true,
        center: !0,
        loop: !0,
        lazyLoad: !0,
        center: true,
        startPosition: 0,
        navText: ["<div class='icon icon-left'></div>", "<div class='icon icon-right'></div>"],
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: true
            },
            600: {
                items: 1,
                nav: true,
                dots: true
            },
            768: {
                items: 3,
                nav: true,
                dots: true
            }
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function() {
        var e = $(window).scrollTop(),
            n = 0;
        $(window).width() >= 640 ? ($("#logo").removeClass("logotop"), n = 34) : ($("#logo").addClass("logotop"), n = 0), e >= n ? ($("header").addClass("fixed-header "), $("#logo").addClass("logotop"), !0 === $("header .tab-nav").hasClass("off") ? $("header .tab-nav").removeClass("is-hidden") : $("header .tab-nav").addClass("is-hidden")) : ($("header").removeClass("fixed-header "), $("header .tab-nav").removeClass("is-hidden"))
    });
    if($(window).width() <= 640){
        $('.collapse.navbar-collapse').prepend("<div id='tabnav'></div>");
        $('#tabnav').html($('.tab-nav').html());
    };

});
$(document).ready(function () {

    $("ul.fm-lg li").hover(function () { //When trigger is hovered...
        $(this).children("ul.dropdown-menu").slideToggle(200, "easeInOutQuart");
    })
});