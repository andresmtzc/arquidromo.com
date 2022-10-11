var $ = jQuery.noConflict();
var isMobile = false; //initiate as false

// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

$(document).ready(function () {

    $('li.menu-item-has-children').mouseenter(function() {
        var id = $(this).attr('id');

        //$('#test').attr('id')
        $('ul.desk ul.sub-menu.sb-menu').show();
        $('ul.desk li.menu-item-has-children:not(#' + id +') ul.sub-menu.sb-menu').hide();
    });

    $(".enumenu_ul.mob").height($(window).height() - ($("header").outerHeight() + parseInt($("header").css("top"))));

    backToTop();

    // Videos sueltos (Insta)
    $(".vimeo-suelto").each(function () {
        var videoId = $(this).attr("data-video-id");
        var random = 'vimeo' + Math.floor((Math.random() * 100) + 1);
        $(this).attr("id", random + videoId);
        var videoTemporal = new Vimeo.Player(random + videoId, {
            id: videoId,
            loop: true,
            byline: false,
            portrait: false,
            title: false,
        });
        videoTemporal.setVolume(0);
    });

    $(".back-top").click(function () {
        $("html,body").animate({
            scrollTop: $("#masthead").offset().top,
        }, 800);
    });

    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': '',
        menuslide_overlap: true,
        onMenuopen: function () {
        }
    });

    if ($(".home-slider").length) {
        console.log('Home slider');

        var ratio = 9 / 16; //this is why the 56.25% padding hack exists
        var owl_home = $(".home-slider");
        var items_ = owl_home.find(".item").length > 1 ? true : false;

        if ($(".mob-video .vimeo-video").length) {
            var vid = $(".mob-video .vimeo-video").attr("data-video-id");
            var html_ = '<iframe src="http://player.vimeo.com/video/' + vid + '?autoplay=0" style="position:relative" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            $(".mob-video .vimeo-video").html(html_);
        }

        if (isMobile) {
            $(".vimeo-video", owl_home).each(function () {
                var vid = $(this).attr("data-video-id");
                var html_ = '<iframe src="http://player.vimeo.com/video/' + vid + '?autoplay=0" style="position:relative" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                $(this).html(html_);
            });
        } else {
            var vimeoPlayers = {};
            $(".vimeo-video", owl_home).each(function () {
                var videoId = $(this).attr("data-video-id");
                $(this).attr("id", "vimeo" + videoId);
                var tempObj = new Vimeo.Player('vimeo' + videoId, {
                    id: videoId
                    , loop: true
                    , byline: false
                    , portrait: false
                    , title: false
                    ,
                });
                tempObj.setVolume(0);
                vimeoPlayers[videoId] = tempObj;
            });
        }


        owl_home.owlCarousel({
            items: 1
            , slideSpeed: 100
            , rewindSpeed: 300
            , mouseDrag: items_
            , touchDrag: items_
            , pullDrag: items_
            , autoplaySpeed: 3000
            //, nav: items_
            , nav: true
            , navSpeed: 1000
            /*, autoplayTimeout: 7000*/
            , autoplayTimeout: 41000
            , loop: true
            , pagination: items_
            , lazyLoad: true
            , autoplay: true
            , autoplayHoverPause: true
            , onInitialized: function () {
                var video_ = $(".owl-item.active", this.$element).find(".vimeo-video");
                if (!isMobile) {
                    var video_ = $(".owl-item.active", owl_home).find(".vimeo-video");
                    if (video_.length) {
                        var videoId = video_.attr("data-video-id")
                        vimeoPlayers[videoId].play();
                        vimeoResizer(owl_home);
                        setTimeout(function () {
                            vimeoResizer(owl_home);
                        }, 500)
                    }
                }
            }
            , onTranslated: function () {
                if (!isMobile) {
                    $(".owl-item", owl_home).find(".vimeo-video").each(function () {
                        var videoId = $(this).attr("data-video-id")
                        vimeoPlayers[videoId].pause();
                    });
                    var video_ = $(".owl-item.active", owl_home).find(".vimeo-video");
                    if (video_.length) {
                        var videoId = video_.attr("data-video-id")
                        vimeoPlayers[videoId].play();
                        vimeoResizer(owl_home);
                    }
                }
            }
            , onResize: function () {
                setTimeout(function () {
                    vimeoResizer(owl_home);
                }, 500)
            }
        });
    }

    function vimeoResizer(selSlider) {
        var video_ = $(".owl-item", selSlider).find(".vimeo-video").css({
            "height": ""
            , "width": ""
        });
        if (video_.length) {
            var width = parseInt(video_.width());
            var height = (width * ratio);
            $("iframe", video_).css({
                "width": width
                , "height": height
                ,
            });
            $(video_).css("height", height * 1.0);
        }
    }

    /* Mobile menu specific JS */
    $(window).resize(function () {
        cloning();
    });

    var flags_ = true;
    if (!$(".menu-icon").is(':visible')) {
        flags_ = false;
        console.log('Flags false');
    }

    cloning();

    function cloning() {
        if ($(".menu-icon").is(':visible')) {
            if (flags_) {
                flags_ = false;
                $(".logo").clone().prependTo(".enumenu_ul").wrap("<li class='logo-li'></li>");
                $(".footer-main").clone().appendTo(".enumenu_ul").addClass('mobile');

            }
        } else {
            console.log('menu icon no visible');
            if (!flags_) {
                flags_ = true;
                $(".enumenu_ul .logo-li").remove();
                $(".enumenu_ul .footer-main").remove();
            }
        }
    }

    $(document).keyup(function (event) {
        var direction = null;
        if (event.keyCode == 37) {
            // go left
            $(".slider, .home-slider").trigger('prev.owl.carousel');
        } else if (event.keyCode == 39) {
            // go right
            $(".slider, .home-slider").trigger('next.owl.carousel');
        }
    });

    // Si hay posts (projects)...
    if ($(".filter-slider").length) {
        if ($(".mob-video").length) {
            $(".filter_block").addClass("mobileOnlyHidden")
            $(".filter-slider").addClass("mobileOnlyHidden")
        }

        var owlvimeoPlayers = {};

        // Clicks en el filtrado de material del proyecto (menos descarga)
        $(".filter-section a").not('.descrager_planos').click(function (e) {

            e.preventDefault();
            // Slider objetivo
            var hashTarget = $(this).attr("href").replace("#", "");
            var $target = $("[data-target=" + hashTarget + "]");

            // Escondemos todos los sliders
            $(".filter-slider .slider").hide();

            owlvimeoPlayers = {};

            $('.slider').each(function () {

                // Destruye el carrusel activo antes de pasar al nuevo
                if ($(this).data("owlCarousel")) {

                    $('.vimeo-video', this).each(function () {
                        var videoId = $(this).attr("data-video-id");
                        $(this).attr("id", "vimeo" + videoId);
                        var tempObj = new Vimeo.Player('vimeo' + videoId, {
                            id: videoId
                            , loop: true
                            , byline: false
                            , portrait: false
                            , title: false
                            ,
                        });
                        tempObj.setVolume(0);
                        owlvimeoPlayers[videoId] = tempObj;

                    });
                    $(this).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                    $(this).find('.owl-stage-outer').children().unwrap();
                }
            });

            $target.css('opacity', 0);
            $target.show();

            setTimeout(function () {
                var canPlay = false;
                var v = document.createElement('video');
                if (v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) {
                    canPlay = true;
                }
                var owl = $target;

                owl.owlCarousel({
                    items: 1,
                    slideSpeed: 1500,
                    rewindSpeed: 1500,
                    mouseDrag: false,
                    touchDrag: true,
                    autoplaySpeed: 1500,
                    //nav: items_,
                    nav: true,
                    navSpeed: 1000,
                    loop: (owl.children().length) == 1 ? false : true,
                    pagination: true,
                    //autoplay: canPlay ? false : true,
                    video: true,
                    lazyLoad: true,
                    autoplay: false,
                    autoplayHoverPause: true,
                    onInitialized: function () {

                        $target.css('opacity', 1);

                        var video_ = $(".owl-item.active", this.$element).find(".vimeo-video");
                        if (isMobile) {
                            $(".vimeo-video", this.$element).each(function () {
                                console.log('Mobile each iframe', this);

                                var vid = $(this).attr("data-video-id");
                                var html_ = '<iframe src="http://player.vimeo.com/video/' + vid + '?autoplay=0" style="position:relative" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                                $(this).html(html_);
                            });
                        } else {
                            $(".vimeo-video", this.$element).each(function () {
                                console.log('No mobile each', this);

                                var videoId = $(this).attr("data-video-id");
                                $(this).attr("id", "vimeo" + videoId);
                                var tempObj = new Vimeo.Player('vimeo' + videoId, {
                                    id: videoId
                                    , loop: true
                                    , byline: false
                                    , portrait: false
                                    , title: false
                                    ,
                                });
                                tempObj.setVolume(0);
                                owlvimeoPlayers[videoId] = tempObj;
                            });
                        }
                        if (!isMobile) {
                            if (video_.length) {
                                var videoId = video_.attr("data-video-id")
                                owlvimeoPlayers[videoId].play();
                                vimeoResizer(owl);
                                setTimeout(function () {
                                    vimeoResizer(owl);
                                }, 500)
                            }
                        }
                    },
                    onTranslated: function () {
                        if (!isMobile) {
                            $(".owl-item", this.$element).find(".vimeo-video").each(function () {
                                var videoId = $(this).attr("data-video-id")
                                owlvimeoPlayers[videoId].pause();
                            });
                            var video_ = $(".owl-item.active", this.$element).find(".vimeo-video");
                            if (video_.length) {
                                var videoId = video_.attr("data-video-id")
                                owlvimeoPlayers[videoId].play();
                                vimeoResizer(owl);
                            }
                        }
                    },
                    onResize: function () {
                        setTimeout(function () {
                            vimeoResizer(owl);
                        }, 500)
                    }
                });
            });
        });
        $(".filter-section li:first-child > a").trigger("click");
    }

    // Back to top
    $(window).scroll(function () {
        backToTop()
    });

    function backToTop() {
        if ($(window).scrollTop() > 150) {
            $(".back-top").fadeIn()
        } else {
            $(".back-top").fadeOut()
        }
    }

    $(window).load(function () {
        $(".preloader").addClass("preload-show");
        setTimeout(function () {
            $(".preloader").fadeOut("slow");
            $(".preloader").removeClass("preload-show");
        }, 800);
    });

    resizeContent();

    $(window).resize(function () {
        resizeContent();
    });
});

function resizeContent() {
    $height = $(window).height();
    $('.mob-video').height($height);
}

!function ($) {
    // Pinterest en proyectos
    $('.boton-pinterest-proyectos, .boton-pinterest-proyectos-suelto').click(function() {
        var url = $(this).attr('href');
        var media = $(this).attr('data-image');
        var desc = $(this).parents('body').find('.filter-title h1').text();
        window.open("//www.pinterest.com/pin/create/button/"+
            "?url="+url+
            "&media="+media+
            "&description="+desc,"_blank", "toolbar=no, scrollbars=no, resizable=no, top=0, right=0, width=750, height=320");
        return false;
    });

    // Botón más info
    $('.boton-mas-info').click(function(_evt){
        _evt.preventDefault();
        $('#texto-portada-extra, #texto-portada-extra-movil').addClass('desplegado');
        setTimeout(function () {
            $('#texto-portada-extra, #texto-portada-extra-movil').addClass('visible');
            $(this).fadeOut();
        }.bind(this), 500);
    });

    // Scroll actions
    $(window).load(function(){
        setTimeout(function () {
            accionesScroll();
        }, 800);


        /* Menú desk */
        $('.enumenu_ul.desk li').mouseenter(function(){
            $(this).find('ul').css({
                opacity: 1,
                'z-index': 9,
            });
        });

        $('#menu-header-sp').mouseleave(function(){
            var ancestro = $('.current-menu-ancestor').length;
            if (!ancestro) {
                $('.sub-menu.sb-menu').css({
                    opacity: 0,
                    'z-index': 9,
                });
            }
        });
    });

    function accionesScroll() {
        function textoArriba() {
            // Taxonomías proyecto tipo
            if ($('body').hasClass('tax-tipo')) {
                var altoTexto = $("#texto-editable").height();
                $("body.tax-tipo #masthead").css("margin-top", altoTexto + 40);
                if ($(window).scrollTop() <= altoTexto + 40) {
                    window.scrollTo(0, altoTexto + 40);
                }
            }

            if ($('body').hasClass('page-template-proyectos')) {
                var altoTexto = $("#texto-editable").height();
                $("body.page-template-proyectos #masthead").css("margin-top", altoTexto + 40);
                if ($(window).scrollTop() <= altoTexto + 40) {
                    window.scrollTo(0, altoTexto + 40);
                }
            }

            if ($('body').hasClass('blog')) {
                var altoTexto = $("#texto-editable").height();
                $("body.blog #masthead").css("margin-top", altoTexto + 40);
                if ($(window).scrollTop() <= altoTexto + 40) {
                    window.scrollTo(0, altoTexto + 40);
                }
            }

            if ($('body').hasClass('page-template-estudio')) {
                var altoTexto = $("#texto-editable").height();
                $("body.page-template-estudio #masthead").css("margin-top", altoTexto + 40);
                if ($(window).scrollTop() <= altoTexto + 40) {
                    window.scrollTo(0, altoTexto + 40);
                }
            }

            if ($('body').hasClass('page-template-premios')) {
                var altoTexto = $("#texto-editable").height();
                $("body.page-template-premios #masthead").css("margin-top", altoTexto + 40);
                if ($(window).scrollTop() <= altoTexto + 40) {
                    window.scrollTo(0, altoTexto + 40);
                }
            }

            if ($('body').hasClass('page-template-exposiciones')) {
                var altoTexto = $("#texto-editable").height();
                $("body.page-template-exposiciones #masthead").css("margin-top", altoTexto + 40);
                if ($(window).scrollTop() <= altoTexto + 40) {
                    window.scrollTo(0, altoTexto + 40);
                }
            }

            if ($('body').hasClass('page-template-publications')) {
                var altoTexto = $("#texto-editable").height();
                $("body.page-template-publications #masthead").css("margin-top", altoTexto + 40);
                if ($(window).scrollTop() <= altoTexto + 40) {
                    window.scrollTo(0, altoTexto + 40);
                }
            }
        }

        textoArriba();

        var windowWidth = $(window).width();
        $(window).resize(function () {
            if ($(window).width() != windowWidth) {
                textoArriba();
            }
        });

        var posicionScroll = 0;
        $(window).scroll(function () {
            var posicionScrollActual = $(this).scrollTop();
            if (posicionScrollActual < posicionScroll) {
                $('#texto-editable').addClass('visible');
            }
            posicionScroll = posicionScrollActual;
        });
    }

    // Waypoints
    var $proyectos = $('#waypoint-proyectos');
    var $noticias = $('#waypoint-noticias');
    var $copy = $('#waypoint-copy');

    if ($proyectos.length) {
        new Waypoint.Inview({
            element: $proyectos[0],
            enter: function() {
                $proyectos.addClass('animacion');
            },
        });
    }

    if ($noticias.length) {
        new Waypoint.Inview({
            element: $noticias[0],
            enter: function() {
                $noticias.addClass('animacion');
            },
        });
    }

    if ($copy.length) {
        new Waypoint.Inview({
            element: $copy[0],
            enter: function() {
                $copy.addClass('animacion');
            },
        });
    }

    // Wechat Widget
    var wechatWidget = $("#wechat-widget");
    var wechatLink = $(".wechat-link");

    $("#menu").on('click', '.wechat-link', function(event) {
        event.preventDefault();
        event.stopPropagation();
        wechatWidget.css({
            top: "100px",
            left: "calc(50% - 100px)",
        });
        wechatWidget.fadeToggle();
    });

    $("body").click(function (event) {
        //event.stopPropagation();
        wechatWidget.fadeOut();
    });

    wechatLink.on({
        mouseover: function() {
            var pos = wechatLink.offset();
            wechatWidget.css({
                left:pos.left + 100,
                top: pos.top - 100
            });
            wechatWidget.stop().fadeIn();
        },
        mouseout: function() {
            wechatWidget.stop().fadeOut();
        }
    });

}(jQuery);