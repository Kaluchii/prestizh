$(document).ready(function () {
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


    $(window).on('load resize', function () {
        if ($(window).width() > 1010) {
            $('.header__logo').attr('src', '/img/logo.png');
        } else {
            $('.header__logo').attr('src', '/img/logo_mob.png');
        }
        if ($(window).width() > 940) {
            $('.js_nav_wrap').attr('style', '');
            $('.js_fixed_nav_wrap').attr('style', '');
        } else {
            $('.js_nav_wrap').removeClass('show-imp');
        }
    });

    $(window).on('scroll', function () {
        if($(window).scrollTop() >= $('#title').outerHeight()){
            $('.fixed-header').fadeIn(500);
        }else{
            $('.fixed-header').fadeOut();
            if ($(window).width() <= 940){
                $('.js_fixed_menu').removeClass('is-open');
                $('.js_fixed_nav_wrap').removeClass('is-open').hide();
            }
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

    /*$('.js_popup_close').on('click', function () {
        $('.title-popup').fadeOut();
    });*/

    $('.js_goto_anchor').bind("click", function(e){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        if ($(window).width() <= 940){
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
        $('.layout__flat-name').text(flatsObj[flat_category_id]['singularly']);
        $('.layout-choice__btns-item.visible:first .js_area_btn').click();
        $('.js_rooms_btn').removeClass('is-active').closest('.layout-choice__btns-item').removeClass('is-active');
        $(this).addClass('is-active').closest('.layout-choice__btns-item').addClass('is-active');
    });

    var state = false;
    $('.js_area_btn').on('click', function () {
        var thisLayout = flatsObj[flat_category_id]['layouts'][$(this).data('id')];

        if ($(window).width() <= 820 && state){
            setTimeout(function () {
                $('body,html').animate({
                    scrollTop: $('.layout__img-wrapper').offset().top - 70
                }, 500);
            }, 200);
        }

        $('.js_give_src').attr('src', thisLayout.src);
        $('.js_give_area').text(thisLayout.area.replace('.', ','));
        $('.js_give_block').text(thisLayout.block);
        $('.js_give_floor').text(thisLayout.floor);
        var half_tg = number_format(Math.round(thisLayout.meter_cost * thisLayout.area * EXCHANGE_COST), 0, ',', ' ');
        $('.js_give_price').text(half_tg);
        $('.js_area_btn').removeClass('is-active').closest('.layout-choice__btns-item').removeClass('is-active');
        $(this).addClass('is-active').closest('.layout-choice__btns-item').addClass('is-active');

        state = true;
    });

    $('.layout-choice__btns-item:first-child .js_rooms_btn').click();

    var $fotorama = $('.js_gallery__fotorama').fotorama({
        navwidth: '90%'
    });
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

    $("<div class='nav-scroll-btn nav-scroll-btn--prev'></div>").insertBefore(".fotorama__nav.fotorama__nav--thumbs");
    $("<div class='nav-scroll-btn nav-scroll-btn--next'></div>").insertAfter(".fotorama__nav.fotorama__nav--thumbs");

    $("<div class='gallery__bg-image-block gallery__bg-image-block--prev'><div class='gallery__bg-image-wrap'><img class='gallery__bg-image js_img_prev'></div></div>").insertAfter(".fotorama__arr.fotorama__arr--next");
    $("<div class='gallery__bg-image-block gallery__bg-image-block--next'><div class='gallery__bg-image-wrap'><img class='gallery__bg-image js_img_next'></div></div>").insertAfter(".fotorama__arr.fotorama__arr--next");
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
});