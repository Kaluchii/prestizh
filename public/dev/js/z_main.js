$(function () {
    /***
     number - исходное число
     decimals - количество знаков после разделителя
     dec_point - символ разделителя
     thousands_sep - разделитель тысячных
     fractional_not_view - не отображать знаки после разделителя у целых чисел
     ***/
    function number_format(number, decimals, dec_point, thousands_sep, fractional_not_view) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            fr_not_view = (typeof fractional_not_view === 'undefined') ? false : fractional_not_view,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k)
                    .toFixed(prec);
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        // Чтобы не отображать знаки после запятой у целых чисел
        if (fr_not_view && (n - Math.round(n) == 0)) {
            return n;
        }
        //////
        if ((s[1] || '')
            .length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1)
                .join('0');
        }
        return s.join(dec);
    }

    $(".js_radial").knob();

    var sections = $('.header__nav-item--fixed .header__nav-link'),
        $window = $(window),
        offset = $window.height() / 2.5;

    $window.on('scroll', function () {
        var cursor = $window.scrollTop(),
            cur_sec = '',
            hash;

        sections.each(function(){
            var sec_name = $(this).attr('href');
            if( $(sec_name).offset().top - offset < cursor){
                $('.header__nav-item--fixed').removeClass('is-active');
                $(this).closest('.header__nav-item--fixed').addClass('is-active');
                cur_sec = sec_name;
            }
        });
        hash = cur_sec.slice(1);
        window.location.hash = '/'+hash;

        if($window.scrollTop() >= $('#title').outerHeight()){
            $('.fixed-header').fadeIn(500);
            if ($window.width() <= 1024 && hash != 'flats'){
                $('.js-top-btn').fadeIn();
            } else if (hash == 'flats'){
                $('.js-top-btn').fadeOut();
            }
        }else{
            $('.fixed-header').fadeOut();
            $('.js-top-btn').fadeOut();
            if ($window.width() <= 940){
                $('.js_fixed_menu').removeClass('is-open');
                $('.js_fixed_nav_wrap').removeClass('is-open').hide();
            }
        }
    });

    $window.on('load resize', function () {
        if ($window.width() > 940) {
            $('.js_nav_wrap').attr('style', '');
            $('.js_fixed_nav_wrap').attr('style', '');
        } else {
            $('.js_nav_wrap').removeClass('show-imp');
        }
    });

    $('.js_menu').on('click', function () {
        $(this).toggleClass('is-open');
        $('.js_nav_wrap').toggleClass('is-open').slideToggle();
    });
    $('.js_fixed_menu').on('click', function () {
        $(this).toggleClass('is-open');
        $('.js_fixed_nav_wrap').toggleClass('is-open').slideToggle();
    });

    $('.js_popup_close').on('click', function () {
        $('.title-popup').fadeOut();
    });


    $('.js_prices_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000
    });


    $('.js_title_popup_slick').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 800
    });


    if (window.location.href.indexOf("/#/") >= 0) {
        var path = window.location.href;
        var anchor = path.split('/')[4];
        setTimeout(function () {
            $('html, body').stop().animate({
                scrollTop: $('#'+anchor).offset().top-110
            }, 1000);
        }, 500);
    }

    $('.js_goto_anchor').bind("click", function(e){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-110
        }, 1000);
        e.preventDefault();
        if ($window.width() <= 940){
            $('.js_fixed_menu').removeClass('is-open');
            $('.js_menu').removeClass('is-open');
            $('.js_nav_wrap').removeClass('is-open').slideUp();
            $('.js_fixed_nav_wrap').removeClass('is-open').slideUp();
        }
    });


    var flat_category_id;
    $('.js_rooms_btn').on('click', function () {
        flat_category_id = $(this).data('id');
        $('.js_area_btn').closest('.layout-choice__btns-item').hide().removeClass('visible');
        $('.js_area_btn' + '.' + 'flat' + flat_category_id).closest('.layout-choice__btns-item').show().addClass('visible');
        $('.js_layout_name').text(flatsObj[flat_category_id]['singularly']);
        $('.js_area_btn:visible')[0].click();
        $('.js_rooms_btn').removeClass('is-active').closest('.layout-choice__btns-item').removeClass('is-active');
        $(this).addClass('is-active').closest('.layout-choice__btns-item').addClass('is-active');
    });

    var state = false;
    $('.js_area_btn').on('click', function () {
        var thisLayout = flatsObj[flat_category_id]['layouts'][$(this).data('id')];
        var basic_price = Math.round(thisLayout.meter_cost * thisLayout.area);
        var hasDiscount = thisLayout.discount > 0;

        if ($window.width() <= 820 && state){
            setTimeout(function () {
                $('body,html').animate({
                    scrollTop: $('.layout__img-wrapper').offset().top - 70
                }, 500);
            }, 200);
        }

        $('.js_give_src').animate({opacity: "toggle"}, 200);
        setTimeout(function () {
            $('.js_give_src').attr('src', thisLayout.src);
        }, 200);
        $('.js_give_src').animate({opacity: "toggle"}, 200);
        $('.js_give_area').text(thisLayout.area.replace('.', ','));
        $('.js_give_block').text(thisLayout.block);
        $('.js_give_floor').text(thisLayout.floor);
        $('.js_give_price').text(number_format(thisLayout.meter_cost, 0, ',', ' ')).toggleClass('is-old', hasDiscount);
        $('.js_at_once_price').text(number_format(basic_price, 0, ',', ' ')).toggleClass('is-old', hasDiscount);
        $('.js_discount_wrap').toggle(hasDiscount);

        if(hasDiscount){
            $('.js_give_price_discount').text(number_format(thisLayout.meter_cost - thisLayout.meter_cost / 100 * thisLayout.discount, 0, ',', ' '));
            $('.js_at_once_price_discount').text(number_format(basic_price - basic_price / 100 * thisLayout.discount, 0, ',', ' '));
        }

        $('.js_area_btn').removeClass('is-active').closest('.layout-choice__btns-item').removeClass('is-active');
        $(this).addClass('is-active').closest('.layout-choice__btns-item').addClass('is-active');

        state = true;
    });

    $('.js_area_btn_com').on('click', function () {
        var thisLayout = comObj[$(this).data('id')];
        var basic_price = Math.round(thisLayout.meter_cost * thisLayout.area);
        var hasDiscount = thisLayout.discount > 0;

        $('.js_give_src_com').animate({opacity: "toggle"}, 200);
        setTimeout(function () {
            $('.js_give_src_com').attr('src', thisLayout.src);
        }, 200);
        $('.js_give_src_com').animate({opacity: "toggle"}, 200);
        $('.js_give_area_com').text(thisLayout.area.replace('.', ','));
        $('.js_com_layout_name').text(thisLayout.layout_name);
        $('.js_give_floor_com').text(thisLayout.floor);
        $('.js_give_price_com').text(number_format(thisLayout.meter_cost, 0, ',', ' ')).toggleClass('is-old', hasDiscount);
        $('.js_at_once_price_com').text(number_format(basic_price, 0, ',', ' ')).toggleClass('is-old', hasDiscount);
        $('.js_discount_wrap_com').toggle(hasDiscount);

        if(hasDiscount){
            $('.js_give_price_discount_com').text(number_format(thisLayout.meter_cost - thisLayout.meter_cost / 100 * thisLayout.discount, 0, ',', ' '));
            $('.js_at_once_price_discount_com').text(number_format(basic_price - basic_price / 100 * thisLayout.discount, 0, ',', ' '));
        }

        $('.js_area_btn_com').removeClass('is-active').closest('.layout-choice__btns-item').removeClass('is-active');
        $(this).addClass('is-active').closest('.layout-choice__btns-item').addClass('is-active');
    });


    var $stagesFotorama = $('.js_stages__fotorama').fotorama({
        navwidth: '90%'
    });
    // 2. Get the API object.
    var stagesFotorama = $stagesFotorama.data('fotorama');

    $('.js_stage_btn').on('click', function () {
        if (!$(this).hasClass('is-active')) {

            var thisId = $(this).data('id');

            $('.js_stages__fotorama, .js_give_stage_text').animate({opacity: "toggle"}, 300);
            var imageArray = [];
            for (var stageImg in stageObj[thisId]['images']){
                var imageSrc = stageObj[thisId]['images'][stageImg].src;
                imageArray.push({img: imageSrc});
            }
            setTimeout(function () {
                $('.js_give_stage_text').html(stageObj[thisId]['text']);
                stagesFotorama.load(imageArray);
            }, 300);

            $('.js_stages__fotorama, .js_give_stage_text').animate({opacity: "toggle"}, 300);
            var left = $(this).width() / 2;
            for(var i = 0; i < $(this).index(); i++){
                left += $('.js_stage_btn').eq(i).width() + 10;
            }
            $('.stages__list').css('left', $window.width() / 2 - left);
            $('.js_stage_btn.is-active').removeClass('is-active');

            $(this).addClass('is-active');
        }
    });

    $window.on('resize', function () {
        var activeBtn = $('.js_stage_btn.is-active');
        var left = activeBtn.width() / 2;
        for(var i = 0; i < activeBtn.index(); i++){
            left += $('.js_stage_btn').eq(i).width() + 10;
        }
        $('.stages__list').css('left', $window.width() / 2 - left);

        if ($window.width() > 1024){
            $('.js-top-btn').css('display', 'none');
        }
    });


    $('.js_phone_input').maskInput();


    /*(function(){
        var $titlePopup = $('.js_title_popup'),
            timer = 0,
            secondsForSwitch = 9,
            hoverOnPopup = false,
            focusInPopup = false;

        $('.js_slider_btn').on('click', function () {
            var slideNum = $(this).data('slide');

            if (!$titlePopup.hasClass('show-slide-' + slideNum)){
                $titlePopup.toggleClass('show-slide-1 show-slide-2');
            }

            timer = 0;
        });

        $titlePopup
            .on('mouseenter', function () {
                hoverOnPopup = true;
            })
            .on('mouseleave', function () {
                hoverOnPopup = false;
            })
            .on('focusin', function () {
                focusInPopup = true;
            })
            .on('focusout', function () {
                focusInPopup = false;
            });

        setInterval(function () {
            if ($window.width() <= 1010) {
                return;
            }

            if (!(hoverOnPopup || focusInPopup)) {
                timer++;
            }
            if (timer === secondsForSwitch) {
                $titlePopup.toggleClass('show-slide-1 show-slide-2');
                timer = 0;
            }
        }, 1000);

        $window.on('resize', function () {
            if ($window.width() <= 1010) {
                $titlePopup.addClass('show-slide-1').removeClass('show-slide-2');
            }
        });
    }());*/


    /* Yandex map */

    var myMap;
    var init = function () {
        myMap = new ymaps.Map("map",
            {center: [43.233779, 76.921195], zoom: 16, controls: ['zoomControl']});
        myMap.behaviors.disable("scrollZoom");
        myMap.behaviors.disable("dblClickZoom");
        if ($window.width() < 1000) {
            var myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                iconLayout: "default#image",
                iconImageHref: "/img/map_icon.png",
                iconImageSize: [100, 90],
                iconImageOffset: [-100, -45]
            });
        } else {
            var myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                iconLayout: "default#image",
                iconImageHref: "/img/map_icon.png",
                iconImageSize: [135, 121],
                iconImageOffset: [-135, -60]
            });
        }
        myMap.geoObjects.add(myPlacemark);

        $window.on('resize', function (){
            if ($window.width() < 1000) {
                myMap.geoObjects.removeAll();
                myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                    iconLayout: "default#image",
                    iconImageHref: "/img/map_icon.png",
                    iconImageSize: [100, 90],
                    iconImageOffset: [-100, -45]
                });
                myMap.geoObjects.add(myPlacemark);
            } else {
                myMap.geoObjects.removeAll();
                myPlacemark = new ymaps.Placemark([43.233179, 76.92095], {}, {
                    iconLayout: "default#image",
                    iconImageHref: "/img/map_icon.png",
                    iconImageSize: [135, 121],
                    iconImageOffset: [-135, -60]
                });
                myMap.geoObjects.add(myPlacemark);
            }
        });
    };


    var mapChecker = new Waypoint({
        element: $('.contacts'),
        handler: function() {
            var ymapScript = $('.js_ymaps_script');
            ymapScript.attr('src', ymapScript.attr('data-src'));
            mapChecker.destroy();
            initMap();
        },
        offset: '100%'
    });

    function initMap () {
        if (typeof(ymaps) === 'undefined') {
            setTimeout(initMap, 100);
        } else {
            ymaps.ready(init);
        }
    }


    var flatsChecker = new Waypoint({
        element: $('.js_flats'),
        handler: function() {
            if ($('.js_rooms_btn').length) {
                $('.js_rooms_btn')[0].click();
            }
            if ($('.js_area_btn_com').length) {
                $('.js_area_btn_com')[0].click();
            }

            flatsChecker.destroy();
        },
        offset: '200%'
    });

    var stagesChecker = new Waypoint({
        element: $('.js_stages'),
        handler: function() {
            $('.js_stage_btn:first-child').click();

            stagesChecker.destroy();
        },
        offset: '200%'
    });

    var placesChecker = new Waypoint({
        element: $('.js_places'),
        handler: function() {
            $('.js_place_img').each(function() {
                $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
            });

            placesChecker.destroy();
        },
        offset: '100%'
    });

    var detailsChecker = new Waypoint({
        element: $('.js_details'),
        handler: function() {
            $('.js_details_img').each(function() {
                $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
            });

            detailsChecker.destroy();
        },
        offset: '120%'
    });

    $(window).on('load', function () {
        $('.js_title_lazy_bg').removeClass('lazy-bg');
    });

    // var lazyTitleBgChecker = new Waypoint({
    //     element: $('.js_title_lazy_bg'),
    //     handler: function() {
    //         $(this.element).removeClass('lazy-bg');
    //
    //         lazyTitleBgChecker.destroy();
    //     },
    //     offset: '150%'
    // });

    var lazyFeedbackBgChecker = new Waypoint({
        element: $('.js_feedback_lazy_bg'),
        handler: function() {
            $(this.element).removeClass('lazy-bg');

            lazyFeedbackBgChecker.destroy();
        },
        offset: '150%'
    });

    var lazySliderBgChecker = new Waypoint({
        element: $('.js_mobile_gallery'),
        handler: function() {
            $('.js_slider_lazy_bg').removeClass('lazy-bg');

            lazySliderBgChecker.destroy();
        },
        offset: '150%'
    });

    var lazyContactsBgChecker = new Waypoint({
        element: $('.js_contacts_lazy_bg'),
        handler: function() {
            $(this.element).removeClass('lazy-bg');

            lazyContactsBgChecker.destroy();
        },
        offset: '150%'
    });


    var galleryChecker = new Waypoint({
        element: $('.js_gallery__fotorama'),
        handler: function() {
            var $fotorama = $('.js_gallery__fotorama').fotorama({
                navwidth: '90%'
            });
            initialGalleryFotorama($fotorama);
            galleryChecker.destroy();
        },
        offset: '200%'
    });


    function initialGalleryFotorama ($fotorama) {
        // 2. Get the API object.
        var fotorama = $fotorama.data('fotorama');

        $fotorama.on('fotorama:show', function () {
            var activeIndex = fotorama.activeIndex;
            if(activeIndex == 0){
                $('.js_img_prev').fadeOut(0).attr('src', fotorama.data[fotorama.size-1]['img']).fadeIn(300);
                $('.js_img_next').fadeOut(0).attr('src', fotorama.data[activeIndex+1]['img']).fadeIn(300);
            }else if(activeIndex == fotorama.size-1){
                $('.js_img_prev').fadeOut(0).attr('src', fotorama.data[activeIndex-1]['img']).fadeIn(300);
                $('.js_img_next').fadeOut(0).attr('src', fotorama.data[0]['img']).fadeIn(200);
            }else{
                $('.js_img_prev').fadeOut(0).attr('src', fotorama.data[activeIndex-1]['img']).fadeIn(300);
                $('.js_img_next').fadeOut(0).attr('src', fotorama.data[activeIndex+1]['img']).fadeIn(300);
            }
        });
        $fotorama.on('fotorama:load', function () {
            var activeIndex = fotorama.activeIndex;
            if(activeIndex == 0){
                $('.js_img_prev').attr('src', fotorama.data[fotorama.size-1]['img']);
                $('.js_img_next').attr('src', fotorama.data[activeIndex+1]['img']);
            }else if(activeIndex == fotorama.size-1){
                $('.js_img_prev').attr('src', fotorama.data[activeIndex-1]['img']);
                $('.js_img_next').attr('src', fotorama.data[0]['img']);
            }else{
                $('.js_img_prev').attr('src', fotorama.data[activeIndex-1]['img']);
                $('.js_img_next').attr('src', fotorama.data[activeIndex+1]['img']);
            }
        });
        $("<div class='nav-scroll-btn nav-scroll-btn--prev'></div>").insertBefore(".gallery__fotorama .fotorama__nav.fotorama__nav--thumbs");
        $("<div class='nav-scroll-btn nav-scroll-btn--next'></div>").insertAfter(".gallery__fotorama .fotorama__nav.fotorama__nav--thumbs");

        $("<div class='gallery__bg-image-block gallery__bg-image-block--prev'><div class='gallery__bg-image-wrap'><img class='gallery__bg-image js_img_prev'></div></div>").insertAfter(".gallery__fotorama .fotorama__arr.fotorama__arr--next");
        $("<div class='gallery__bg-image-block gallery__bg-image-block--next'><div class='gallery__bg-image-wrap'><img class='gallery__bg-image js_img_next'></div></div>").insertAfter(".gallery__fotorama .fotorama__arr.fotorama__arr--next");
        // make the buttons functionality

        $('.nav-scroll-btn--prev').click(function () {
            fotorama.show('<');
        });
        $('.nav-scroll-btn--next').click(function () {
            fotorama.show('>');
        });

        $('.js_open_fotorama').on('click', function () {
            fotorama.show($(this).data('img'));
            fotorama.requestFullScreen();
        });
    }
});
