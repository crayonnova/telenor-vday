var $ = jQuery;

$(document).ready(function(){
    $(window).scroll(function() {
        var e = $(window).scrollTop(),
            n = 0;
        $(window).width() >= 976 ? ($("#logo").removeClass("logotop"), n = 34) : ($("#logo").addClass("logotop"), n = 0), e >= n ? ($("header").addClass("fixed-header "), $("#logo").addClass("logotop"), !0 === $("header .tab-nav").hasClass("off") ? $("header .tab-nav").removeClass("is-hidden") : $("header .tab-nav").addClass("is-hidden")) : ($("header").removeClass("fixed-header "), $("header .tab-nav").removeClass("is-hidden"))
    })
})
    


function doneResizing() {
    if ($(window).width() < 768) {
        $(".accfooter").addClass("with-ul").find("ul").hide(), $(".accfooter .navicon").removeClass("is-hidden");
        var e = $(".accfooter .navicon");
        e.off(), e.on("click", function(e) {
            e.stopPropagation(), $(e.target), $(this).toggleClass("icon-plus icon-minus"), console.log("click plus sign"), $(this).parent().children("div").children("div").children("ul").slideToggle(300, "easeInOutQuint")
        })
    } else $(".accfooter").find("ul").show(), $("footer .navicon").addClass("is-hidden")
}
jQuery(document).ready(function(e) {
        e(".search-holder input").on("click", function() {
            e(window).off("resize")
        }), e("#block-menu-menu-personal-menu .content > ul.menu > li:last-child").addClass("support"), e(window).width() < 976 ? (e(".tab-nav").prependTo("#menu-container"), e(".tab-nav").addClass("off"), e("#logo").addClass("logotop"), e(".support").show()) : (e(".tab-nav").prependTo("header"), e(".tab-nav").removeClass("off"), e("#logo").removeClass("logotop"), e(".support").hide()), doneResizing(), scrollHeader(), e(".accfooter div.region").has("span") || e(".accfooter div.region").append('<span class="navicon icon icon-plus is-hidden"></span>')
    }), jQuery(window).resize(function() {
        var e;
        scrollHeader(), $(window).width() >= 976 ? ($(".fm-button").removeClass("change"), $(".tab-nav").prependTo("header"), $(".tab-nav").removeClass("off"), $("#logo").removeClass("logotop"), $(".search-holder").prependTo(".small-menu > .search"), $(".search-holder").removeClass("row"), $("#search-block-form").css("display", "none"), $("#search-block-form").removeClass("Hidden"), $(".support").hide()) : ($(".tab-nav").prependTo("#menu-container"), $(".tab-nav").addClass("off"), $("#logo").addClass("logotop"), $("#search-block-form").removeClass("Hidden"), $("#search-block-form").css("display", "block"), $(".support").show()), clearTimeout(e), e = setTimeout(doneResizing, 500)
    }),
    function() {
        ! function(e, n) {
            "use strict";
            e.fn.flexMenu = function(o) {
                return this.each(function() {
                    var a, s, l, t, i, u, r, d, c, m, f, h;
                    return f = e.extend({
                        breakpoint: 975,
                        responsivePattern: "toggle"
                    }, o), i = e(this), t = i.find("li"), r = e(n), h = void 0, a = e("body"), i.addClass("flexmenu"), s = e(".fm-button"), i.find("li").each(function() {
                        var n;
                        if ((n = e(this)).has("ul").length) return n.addClass("with-ul").find("ul").hide()
                    }), i.find(".with-ul").append('<span class="navicon"></span>'), "toggle" === f.responsivePattern ? i.addClass("fm-toggle") : "off-canvas" === f.responsivePattern && (i.addClass("fm-offcanvas"), a.wrapInner('<div class="fm-inner" />').wrapInner('<div class="fm-outer" />')), u = e(".flexmenu .navicon"), l = e(".fm-inner"), $("#block-menu-menu-personal-menu .content > ul.menu li a"), d = !1, $(".fm-button").on("click", function() {
                        return i = e(".flexmenu.fm-sm"), $(".fm-button").toggleClass("change"), $(".tab-nav").addClass("off"), i.hasClass("fm-toggle") ? i.stop(!0, !0).slideToggle(0, "easeOutBounce") : i.hasClass("fm-offcanvas") ? d ? (i.animate({
                            height: "0px",
                            easing: "easeOutExpo"
                        }, {
                            duration: 500,
                            queue: !1
                        }), $(".overlay").fadeOut(600, "easeOutQuint"), d = !1) : ($(".overlay").click(function() {
                            return $(".fm-button").removeClass("change"), $(".tab-nav").removeClass("off"), $(".tab-nav").addClass("is-hidden"), i.animate({
                                right: "-100%",
                                easing: "easeOutExpo"
                            }, {
                                duration: 500,
                                queue: !1
                            }), $(".overlay").fadeOut(600, "easeOutQuint"), d = !1
                        }), i.animate({
                            height: "100%",
                            easing: "easeOutExpo"
                        }, {
                            duration: 500,
                            queue: !1
                        }), $(".overlay").fadeIn(600, "easeOutQuint"), d = !0) : void 0
                    }), c = function() {
                        if (i.find("li ul").slideUp(0, "easeInOutQuint"), "off-canvas" === f.responsivePattern && e(".flexmenu.fm-sm").length) return i = e(".flexmenu.fm-sm"), l.animate({
                            height: "100%"
                        }), i.animate({
                            height: "0px"
                        }), $(".overlay").hide(), d = !1
                    }, (m = function() {
                        return r.width() <= f.breakpoint ? ($(".search-holder").appendTo("#mobile-search-holder").fadeIn("slow"), $(".support").appendTo("#block-menu-menu-personal-menu .content > ul.menu"), e(".fm-lg").length && (c(), i.hasClass("fm-toggle") && i.hide()), i.removeClass("fm-lg").addClass("fm-sm"), $(".fm-sm #block-menu-menu-personal-menu .content > ul.menu .with-ul .navicon").hasClass("icon-plus") || $(".fm-sm #block-menu-menu-personal-menu .content > ul.menu .with-ul .navicon").addClass("icon-plus"), $(".fm-sm #block-menu-menu-business-menu .content > ul.menu .with-ul .navicon").hasClass("icon-plus") || $(".fm-sm #block-menu-menu-business-menu .content > ul.menu .with-ul .navicon").addClass("icon-plus"), $(".fm-sm #block-menu-menu-about-menu .content > ul.menu .with-ul .navicon").hasClass("icon-plus") || $(".fm-sm #block-menu-menu-about-menu .content > ul.menu .with-ul .navicon").addClass("icon-plus"), s.show(), t.off("mouseenter mouseleave"), u.off("click"), u.on("click", function(n) {
                            return $(n.target).parent().children(".navicon").toggleClass("icon-plus icon-minus"), n.stopPropagation(), e(this).parent(".with-ul").children("ul").stop(!0, !0).slideToggle(300, "easeInOutQuint")
                        })) : (c(), i.removeClass("fm-sm").addClass("fm-lg"), $(".fm-lg #block-menu-menu-personal-menu .content > ul.menu .with-ul .navicon").removeClass("icon-plus"), $(".fm-lg #block-menu-menu-business-menu .content > ul.menu .with-ul .navicon").removeClass("icon-plus"), $(".fm-lg #block-menu-menu-about-menu .content > ul.menu .with-ul .navicon").removeClass("icon-plus"), s.hide(), i.hasClass("fm-toggle") && i.slideDown(0, "easeInOutQuint"), t.off("mouseenter mouseleave"), u.off("click"), t.on("mouseenter", function() {
                            return e(this).children("ul").stop(!0, !0).fadeIn(100, "easeOutQuint")
                        }).on("mouseleave", function() {
                            return e(this).children("ul").stop(!0, !0).fadeOut(300, "easeInOutQuint")
                        }))
                    })(), r.resize(function() {
                        return clearTimeout(h), h = setTimeout(m, 100)
                    })
                })
            }
        }(jQuery, window), $(function() {
            $(".flexmenu.fm-lg>ul>li").each(function() {
                "/" + $(this).find("a").attr("href") === window.location.pathname && $(this).addClass("active")
            }), $(".flexmenu.fm-sm>ul>li").each(function() {
                "/" + $(this).find("a").attr("href") === window.location.pathname && $(this).addClass("active")
            })
        })
    }.call(this);