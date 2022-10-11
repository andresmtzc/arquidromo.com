'use strict'
!function (a) {
    a.fn.responsiveMenu = function (b) {
        a.fn.responsiveMenu.defaultOptions = {
            menuIcon_text: "",
            menuslide_overlap: !1,
            menuslide_push: !1,
            menuslide_direction: ""
        };
        var b = a.extend({}, a.fn.responsiveMenu.defaultOptions, b);
        return this.each(function (c) {
            function j(a) {
                a.removeClass("desk"), e.next().stop(!0, !0).slideUp(), f.removeClass("up"), i && a.slideUp(), a.find(".menu-icon").removeClass("active")
            }

            function k(c) {
                0 == c.prev(".menu-icon").length && (c.wrapAll('<div class="enumenu_container"></div>'), a('<div class="menu-icon"> <div class="menu-box"><span></span><span></span><span></span> </div>' + b.menuIcon_text + "</div>").insertBefore(c), a("> li > a", c).addClass("firstLevel"), c.find("li").each(function () {
                    (a(this).children("ul").length || a(this).children("div").length) && (a(this).addClass("has-children"), a(this).children("a").addClass("menubelow"))
                })), e = c.find("a.menubelow"), 0 == c.find(".arrow").length && (e.each(function () {
                    a(this).closest("li").prepend('<span class="arrow"></span>'), a(this).next().addClass("sb-menu")
                }), f = c.find(".arrow")), b.menuslide_overlap ? a("body").addClass("menuOverlap") : b.menuslide_push && a("body").addClass("menuslide_push"), (b.menuslide_overlap || b.menuslide_push) && "" == b.menuslide_direction && a("body").addClass("slidemenuRight"), "left" == b.menuslide_direction ? a("body").addClass("slidemenuLeft") : "right" == b.menuslide_direction && a("body").addClass("slidemenuRight")
            }

            function l(b) {
                b.find(".arrow").on("touchstart click", function (c) {


                    function translate() {
                        var contacto = document.getElementById('menu-item-1536')
                        var footer = document.getElementById('footer_main')
                        var bottom_contacto
                        var top_footer

                        footer.style.transition = "all, .3s"


                        setTimeout(function () {
                            bottom_contacto = contacto.getBoundingClientRect().bottom
                            top_footer = footer.getBoundingClientRect().top

                            if (bottom_contacto > top_footer) {
                                var traslacion = bottom_contacto - top_footer
                                footer.style.transform = "translateY(" + traslacion + "px)"
                            }
                            else {
                                footer.style.transform = "translateY(-40px)"
                            }
                        }, 400)
                    }

                    //translate()


                    c.stopImmediatePropagation(), c.preventDefault();
                    var d = a(this).closest("li").children(".sb-menu"),
                        e = a(this).closest("li").siblings(),
                        f = a(this).closest("li");
                    b.prev(".menu-icon").is(":visible") && (d.length > 0 && (e.find(".sb-menu").stop(!0, !0).slideUp(), e.find(".sb-menu").each(function () {
                        a(this).closest("li").find(">span").removeClass("up")
                    })), d.is(":visible") ? (d.slideUp(), f.find(">span").removeClass("up")) : (d.find(".sb-menu").each(function () {
                        a(this).stop().slideUp(), a(this).closest("li").find("span").removeClass("up")
                    }), d.stop().slideDown(), f.find(">span").addClass("up")))
                })
            }

            function m(b) {
                b.find(".menubelow").each(function () {
                    a(this).removeAttr("style"), a(this).next().removeAttr("style")
                }), b.find(".arrow").remove(), b.prev(".menu-icon").removeClass("active"), b.addClass("desk").removeAttr("style"), b.removeAttr("style"), a("body").removeClass("menu-open"), h = !1
            }

            function n(c) {
                (0 == b.menuslide_overlap && 0 == b.menuslide_push || 1 == b.menuslide_overlap && 1 == b.menuslide_push) && (i = !0), c.prev(".menu-icon").is(":visible") ? g || (j(c), k(c), l(c), g = !0, h = !1, c.removeClass("desk"), a("body").removeClass("desk"), c.addClass("mob"), a("body").addClass("mob")) : h || (m(c), g = !1, h = !0, c.removeClass("mob"), a("body").removeClass("mob"), c.addClass("desk"), a("body").addClass("desk"))
            }

            function o(b) {
                a("body").removeClass("menu-open"), i && b.stop().slideUp(), b.prev(".menu-icon").removeClass("active"), b.find(".arrow").removeClass("up"), b.find(".sb-menu").stop(!0, !0).slideUp()
            }

            var e, f, d = a(this),
                g = !1,
                h = !1,
                i = !1;
            k(d), n(d), a(window).resize(function (a) {
                n(d)
            }), d.prev(".menu-icon").on("click", function (b) {
                b.stopPropagation(), b.preventDefault(), a(this).hasClass("active") ? o(d) : (i && a(this).next().slideDown(), a(this).addClass("active"), a("body").addClass("menu-open"))
            }), a("body").on("click touchstart", function (b) {
                d.prev(".menu-icon").is(":visible") && (0 != a(b.target).closest(".enumenu_container").length || a(b.target).hasClass("active") || o(d))
            }), "ontouchstart" in window ? (d.find("a").click(function (b) {
                !a(this).hasClass("link") && !a("body").hasClass("mob") && a(this).next().length > 0 && (b.preventDefault(), a(this).hasClass("firstLevel") && (d.find("a").removeClass("link"), d.find("a").parent().removeClass("hover")), a(this).addClass("link"), a(this).parent().addClass("hover"))
            }), a("body").on("click touchstart", function (b) {
                0 == a(b.target).closest(".enumenu_container").length && d.find("a").each(function () {
                    a(this).removeClass("link"), a(this).parent().removeClass("hover")
                })
            })) : (d.find("li").mouseenter(function () {
                a(this).addClass("hover")
            }), d.find("li").mouseleave(function () {
                a(this).removeClass("hover")
            }), a(".menu-icon").on("mouseenter", function () {
                a(this).addClass("hover")
            }).mouseleave(function () {
                a(this).removeClass("hover")
            }))
        })
    }
}(jQuery);