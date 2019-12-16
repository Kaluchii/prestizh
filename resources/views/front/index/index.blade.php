@extends('front.layout')
@section('content')
    @include('front.index.objects')
    @yield('objects')
    <section class="title-block" id="title">
        <header class="title-block__header header">
            <div class="header__logo-wrap">
                <picture>
                    <source srcset="/img/logo_mob.png" media="(max-width: 1110px)">
                    <img src="/img/logo.png" alt="Жилой комплекс Престиж" class="header__logo">
                </picture>
            </div>
            <nav class="header__nav-wrap js_nav_wrap">
                <ul class="header__nav-list">
                    <li class="header__nav-item"><a href="#about" class="js_goto_anchor header__nav-link">О
                            комплексе</a></li>
                    <li class="header__nav-item"><a href="#gallery" class="js_goto_anchor header__nav-link">Галерея</a>
                    </li>
                    <li class="header__nav-item"><a href="#flats" class="js_goto_anchor header__nav-link">Квартиры</a>
                    </li>
                    @if ($commerce->commerce_layout_group->count())
                    <li class="header__nav-item"><a href="#commerce" class="js_goto_anchor header__nav-link">Коммерция</a>
                    </li>
                    @endif
                    <li class="header__nav-item"><a href="#stages" class="js_goto_anchor header__nav-link">Стройка</a>
                    </li>
                    <li class="header__nav-item"><a href="#contacts"
                                                    class="js_goto_anchor header__nav-link">Контакты</a></li>
                </ul>
            </nav>
            <div class="header__feedback-wrap">
                <div class="header__phone-wrap">
                    <p class="header__consult">Ежедневно с 9:00 до 19:00</p>
                    <p class="header__phone-number"><a href="tel:{{ $contacts->phone_field }}"
                                                       class="header__phone-number-link">{{ $contacts->phone_field }}</a>
                    </p>
                </div>
                <a href="#contacts" class="js_goto_anchor header__order-call button"><span class="header__btn-text">ЗАКАЗАТЬ ЗВОНОК</span></a>
            </div>
            <div class="header__menu-button menu-button js_menu">
                <div class="menu-button__rows-wrap">
                    <span class="menu-button__top"></span>
                    <span class="menu-button__middle"></span>
                    <span class="menu-button__bottom"></span>
                </div>
            </div>
        </header>
        <div class="title-block__text-wrap">
            <div class="title-block__col1">
                <h1 class="title-block__title">
                    <span class="title-block__discount-condition">НОВОГОДНИЕ</span><br>
                    СКИДКИ!
                </h1>
                <div class="title-block__box-prices-wrap">
                    <div class="title-block__box-prices-slider js_prices_slider">
                        @foreach($main_block_flats as $item)
                            <div class="flat-price">
                                <div class="flat-price__name">{{ $item['name'] }} квартиры</div>
                                <div class="flat-price__sum-wrap">
                                    <span class="flat-price__pretext">ОТ</span>
                                    <span class="flat-price__discount">
                                        {{ number_format($item['min_price'], 0, ',', ' ') }}<span
                                                class="flat-price__discount-tenge">o</span>
                                        <span class="flat-price__discount flat-price__discount--bg">
                                            {{ number_format($item['min_price'], 0, ',', ' ') }}<span
                                                    class="flat-price__discount-tenge">o</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <span class="title-block__box-prices-bottom-line"></span>
                </div>
            </div>
            <div class="title-block__col2">
                <div class="title-block__popup title-popup js_title_popup show-slide-2">
                    <div class="title-popup__wrapper">
                        @if($main_block->parking_actual || $main_block->flat_stocks_group->count())
                        <div class="title-popup__slick js_title_popup_slick">
                            @foreach($main_block->flat_stocks_group as $stock_item)
                                <div class="title-popup__info-row title-popup__info-row--discount">
                                    <div class="title-popup__discount">АКЦИОННАЯ <span
                                                class="title-popup__discount-row-2">ЦЕНА</span></div>
                                    <div class="title-popup__info-row-text-wrap">
                                        <div class="title-popup__meter-price-wrap">
                                            <div class="title-popup__meter-price">
                                                {{ number_format($stock_item->price, 0, ',', ' ') }}
                                                <span class="title-popup__tenge-meter">
                                        <span class="title-popup__tenge">f</span>
                                        <span class="title-popup__meter">м<sup>2</sup></span>
                                    </span>
                                                <span class="title-popup__meter-price title-popup__meter-price--bg">
                                        {{ number_format($stock_item->price, 0, ',', ' ') }}
                                        <span class="title-popup__tenge-meter">
                                            <span class="title-popup__tenge">f</span>
                                            <span class="title-popup__meter">м<sup>2</sup></span>
                                        </span>
                                    </span>
                                            </div>
                                        </div>
                                        <div class="title-popup__discount-price-condition">
                                            НА {{ $stock_item->name_in_words }} КВАРТИРЫ <br>
                                            <span class="title-popup__discount-limit">{{ $stock_item->discount_condition }}</span>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                            @if($main_block->parking_actual)
                            <div class="title-popup__info-row title-popup__info-row--parking">
                                <p class="title-popup__gift">ПАРКИНГ</p>
                                <p class="title-popup__gift-row-2">В ПОДАРОК</p>
                                <p class="title-popup__condition">
                                    на большие квартиры от 128 м² <br>
                                    <span class="title-popup__condition--tiny">(на этажах 2-9)</span>
                                </p>
                            </div>
                            @endif
                        </div>
                        @endif

                        <div class="title-popup__feedback-row">
                            @if($main_block->parking_actual || $main_block->flat_stocks_group->count())
                            <div class="title-popup__flats-count-wrap">
                                <div class="title-popup__flats-count-middle">АКЦИИ <br> <span class="title-popup__flats-count--tiny">МЕСЯЦА</span></div>
                            </div>
                            @endif
                            <p class="title-popup__interest-text">ЗАИНТЕРЕСОВАЛИСЬ?</p>
                            <div class="title-popup__input-rows form-id" id="popup_call">
                                <input type="hidden" name="form" class="form-input" value="call">
                                <div class="title-popup__row form-row">
                                    <div class="form-row__validation-wrap popup-input">
                                        <label class="popup-input__label popup-input__label--name"
                                               for="popup-client-name"><span class="popup-input__label-text">Имя</span></label>
                                        <input type="text" name="client_name" required id="popup-client-name"
                                               class="form-row__input form-input popup-input__input">
                                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                                    class="form-row__tooltip form-row__tooltip--border">Как к вам
                                                обращаться</p></div>
                                    </div>
                                </div>

                                <div class="title-popup__row form-row">
                                    <div class="form-row__validation-wrap popup-input">
                                        <input type="tel" id="popup-phone"
                                               class="form-row__input form-input popup-input__input popup-input__input--tel js_phone_input"
                                               maxlength="25" data-mask="(999) 999-99-99" name="phone">
                                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                                    class="form-row__tooltip form-row__tooltip--border">Телефонный номер
                                                для связи</p></div>
                                        <label class="popup-input__label popup-input__label--tel"
                                               for="popup-phone"><span class="popup-input__label-text">+7</span></label>
                                    </div>
                                </div>
                                <div class="title-popup__row title-popup__row--btn">
                                    <input type="submit" value="УЗНАТЬ ПОДРОБНЕЕ"
                                           class="title-popup__btn form-row__send-form button-tr button-tr--popup send-form">
                                </div>
                            </div>
                        </div>
                        <div class="title-popup__close js_popup_close"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="stock">
        @if($main_block->flat_stocks_group->count())
        <div class="stock__title">
            акции месяца*
        </div>
        <ul class="stock__price-list">
            @foreach($main_block->flat_stocks_group as $stock_item)
            <li class="stock__price-item">
                <div class="stock__item-row-1">
                    <div class="stock__item-banner">
                        <p class="stock__item-banner-wrap">
                            акционная <br>
                            <span class="stock__item-banner--spacing">цена</span>
                        </p>
                    </div>
                    <p class="stock__item-text">
                        <span class="stock__item-text-wrap">на <span class="stock__item-flat-name">{{ $stock_item->name_with_digit }}</span> квартиры</span>
                    </p>
                </div>
                <div class="stock__item-row-2">
                    <div class="stock__item-price title-popup__meter-price-wrap">
                        <div class="title-popup__meter-price">
                            {{ number_format($stock_item->price, 0, ',', ' ') }}
                            <span class="title-popup__tenge-meter">
                                            <span class="title-popup__tenge">f</span>
                                            <span class="title-popup__meter">м<sup>2</sup></span>
                                        </span>
                            <span class="title-popup__meter-price title-popup__meter-price--bg">
                                            {{ number_format($stock_item->price, 0, ',', ' ') }}
                                <span class="title-popup__tenge-meter">
                                    <span class="title-popup__tenge">f</span>
                                    <span class="title-popup__meter">м<sup>2</sup></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
            @endforeach
        </ul>
        <p class="stock__warning">
            * количество квартир по акциям ограничено
        </p>
        @endif
        @if($main_block->parking_actual)
        <div class="stock__parking">
            <div class="stock__parking-wrap">
                <p class="stock__parking-title">
                    паркинг <br>
                    <span class="stock__parking-subtitle">в подарок</span>
                </p>
                <p class="stock__parking-text">
                    на большие квартиры от 128 м<sup class="stock__parking-text">2</sup> <br>
                    (на этажах 2-9)
                </p>
            </div>
        </div>
        @endif
        <div class="title-popup__feedback-row mobile">
            <p class="title-popup__interest-text mobile">ЗАИНТЕРЕСОВАЛИСЬ?</p>
            <div class="title-popup__input-rows form-id mobile" id="popup_call2">
                <input type="hidden" name="form" class="form-input" value="call">
                <div class="title-popup__row form-row mobile">
                    <div class="form-row__validation-wrap popup-input">
                        <label class="popup-input__label popup-input__label--name mobile" for="popup-client-name2"><span
                                    class="popup-input__label-text">Имя</span></label>
                        <input type="text" name="client_name" required id="popup-client-name2"
                               class="form-row__input form-input popup-input__input mobile">
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                    class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p></div>
                    </div>
                </div>

                <div class="title-popup__row form-row mobile">
                    <div class="form-row__validation-wrap popup-input">
                        <input type="tel" id="popup-phone2"
                               class="form-row__input form-input popup-input__input popup-input__input--tel mobile js_phone_input"
                               maxlength="25" data-mask="(999) 999-99-99" name="phone">
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                    class="form-row__tooltip form-row__tooltip--border">Телефонный номер для связи</p>
                        </div>
                        <label class="popup-input__label popup-input__label--tel mobile" for="popup-phone2"><span
                                    class="popup-input__label-text">+7</span></label>
                    </div>
                </div>
                <div class="title-popup__row title-popup__row--btn">
                    <input type="submit" value="УЗНАТЬ ПОДРОБНЕЕ"
                           class="title-popup__btn form-row__send-form button-tr button-tr--popup send-form mobile">
                </div>
            </div>
        </div>
    </section>


    <section class="about">
        <div class="about__wrapper">
            <div class="about__text-wrap">
                <h2 class="about__title" id="about">{{ $about->block_title_field }}</h2>
                <p class="about__text">{!! $about->text_field !!}</p>
            </div>
            <div class="about__in-detail in-detail">
                <div class="in-detail__triad">
                    <div class="in-detail__item detail-item detail-item--biggest">
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image0->link_field}}?{{$about->image0->cache_index}}"
                                    alt="{{$about->image0->alt_field}}" height="540" width="640"
                                    class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title0_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text0_field !!}</p>
                        </div>
                    </div>
                </div>
                <div class="in-detail__triad">
                    <div class="in-detail__item detail-item">
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image1->link_field}}?{{$about->image1->cache_index}}"
                                    alt="{{$about->image1->alt_field}}" height="400" width="400"
                                    class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title1_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text1_field !!}</p>
                        </div>
                    </div>
                    <div class="in-detail__item detail-item detail-item--middle">
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image2->link_field}}?{{$about->image2->cache_index}}"
                                    alt="{{$about->image2->alt_field}}" height="330" width="330"
                                    class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title2_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text2_field !!}</p>
                        </div>
                    </div>
                    <div class="in-detail__item detail-item detail-item--small">
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title3_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text3_field !!}</p>
                        </div>
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image3->link_field}}?{{$about->image3->cache_index}}"
                                    alt="{{$about->image3->alt_field}}" height="170" width="180"
                                    class="detail-item__img"></div>
                    </div>
                </div>
                <div class="in-detail__triad in-detail__triad--right-align">
                    <div class="in-detail__item detail-item">
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image4->link_field}}?{{$about->image4->cache_index}}"
                                    alt="{{$about->image4->alt_field}}" height="400" width="400"
                                    class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title4_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text4_field !!}</p>
                        </div>
                    </div>
                    <div class="in-detail__item detail-item detail-item--middle">
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image5->link_field}}?{{$about->image5->cache_index}}"
                                    alt="{{$about->image5->alt_field}}" height="330" width="330"
                                    class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title5_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text5_field !!}</p>
                        </div>
                    </div>
                    <div class="in-detail__item detail-item detail-item--small">
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title6_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text6_field !!}</p>
                        </div>
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image6->link_field}}?{{$about->image6->cache_index}}"
                                    alt="{{$about->image6->alt_field}}" height="170" width="180"
                                    class="detail-item__img"></div>
                    </div>
                </div>
                <div class="in-detail__triad">
                    <div class="in-detail__item detail-item">
                        <div class="detail-item__img-wrap"><img
                                    src="{{$about->image7->link_field}}?{{$about->image7->cache_index}}"
                                    alt="{{$about->image7->alt_field}}" height="400" width="400"
                                    class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title7_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text7_field !!}</p>
                            <div class="detail-item__places places">
                                <div class="places__item">
                                    <div class="places__img-wrap">
                                        <img src="/img/tree.png" alt="" class="places__img">
                                    </div>
                                    <div class="places__text-wrap">
                                        <p class="places__time">3 мин.</p>
                                        <div class="places__name">Ботанический бульвар</div>
                                    </div>
                                </div>
                                <div class="places__item">
                                    <div class="places__img-wrap">
                                        <img src="/img/trc_f.png" alt="" class="places__img">
                                    </div>
                                    <div class="places__text-wrap">
                                        <p class="places__time">10 мин.</p>
                                        <div class="places__name">ТРЦ "Forum"</div>
                                    </div>
                                </div>
                                <div class="places__item">
                                    <div class="places__img-wrap">
                                        <img src="/img/road.png" alt="" class="places__img">
                                    </div>
                                    <div class="places__text-wrap">
                                        <p class="places__time">1 мин.</p>
                                        <div class="places__name">Река "Есентай"</div>
                                    </div>
                                </div>
                                <div class="places__item">
                                    <div class="places__img-wrap">
                                        <img src="/img/trc_e.png" alt="" class="places__img">
                                    </div>
                                    <div class="places__text-wrap">
                                        <p class="places__time">15 мин.</p>
                                        <div class="places__name">ТРЦ "Esentai"</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="gallery">
        <div class="gallery__wrapper">
            <h2 class="gallery__title" id="gallery">{{ $gallery->block_title_field }}</h2>
            <div class="gallery__fotorama-wrap">
                <div class="gallery__fotorama js_gallery__fotorama fotorama" data-auto="false" data-ratio="980/560"
                     data-nav="thumbs" data-allowfullscreen="true"
                     data-thumbmargin="15" data-loop="true"
                     data-thumbwidth="110" data-thumbheight="100" data-transition="crossfade">
                    <?php $slider_arr = [] ?>
                    @foreach($gallery->slider_group as $slide)
                        <a href="{{$slide->slide_field->link}}?{{$slide->slide_field->cache_index}}"></a>
                        <?php $slider_arr[] = $slide->slide_field->link . '?' . $slide->slide_field->cache_index ?>
                    @endforeach
                </div>
            </div>
            <div class="for-Google-PageSpeed">
                @php($i = 0)
                @foreach($slider_arr as $slider_item)
                    <img src="{{ $slider_item }}" alt="">
                    @php($i++)
                @endforeach
                @foreach($stages->dom_stages_group as $stage)
                    @if($stage->show_field == 1)
                        @foreach($stage->stage_images_group as $stage_img)
                            <img src="{{$stage_img->stage_photo_field->link}}?{{$stage_img->stage_photo_field->cache_index}}"
                                 alt="">
                        @endforeach
                    @endif
                    @break
                @endforeach
            </div>
            <div class="gallery__mobile-gallery mobile-gallery">
                <ul class="mobile-gallery__list">
                    @php($i = 0)
                    @foreach($slider_arr as $slider_item)
                        <li class="mobile-gallery__item"><img class="mobile-gallery__img js_open_fotorama"
                                                              data-img="{{$i}}" src="{{ $slider_item }}" alt=""></li>
                        @php($i++)
                    @endforeach
                </ul>
            </div>
        </div>
    </section>
    <section class="feedback">
        <div class="feedback__wrapper">
            <h2 class="feedback__title">Хотите посмотреть поближе?<br>Приходите в&nbsp;гости!</h2>
            <div class="feedback__input-rows form-id" id="feedback_call">
                <input type="hidden" name="form" class="form-input" value="call">
                <div class="feedback__row form-row">
                    <div class="form-row__validation-wrap feedback-input">
                        <label class="feedback-input__label feedback-input__label--name" for="feedback_name"><span
                                    class="feedback-input__label-text">Имя</span></label>
                        <input type="text" name="client_name" id="feedback_name" autocomplete="false" required
                               class="form-row__input form-input feedback-input__input">
                        <label class="feedback-input__placeholder" for="feedback_name">Введите имя</label>
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                    class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p></div>
                    </div>
                </div>

                <div class="feedback__row form-row">
                    <div class="form-row__validation-wrap feedback-input">
                        <label class="feedback-input__label feedback-input__label--tel" for="feedback_tel"><span
                                    class="feedback-input__label-text">Телефон</span></label>
                        <input type="tel" id="feedback_tel"
                               class="form-row__input form-input feedback-input__input feedback-input__input--tel js_phone_input"
                               maxlength="25" data-mask="(999) 999-99-99" name="phone">
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                    class="form-row__tooltip form-row__tooltip--border">Телефонный номер для связи</p>
                        </div>
                        <label class="feedback-input__num-label" for="feedback_tel">+7</label>
                    </div>
                </div>
                <div class="feedback__row feedback__row--btn">
                    <input type="submit" value="ОТПРАВИТЬ ЗАЯВКУ"
                           class="feedback__btn form-row__send-form button send-form">
                </div>
            </div>
        </div>
    </section>
    <section class="flats">
        <div class="flats__wrapper">
            <div class="flats__top-wrapper">
                <div class="flats__col1">
                    <h2 class="flats__title" id="flats">{{ $flats->block_title_field }}</h2>
                    <p class="flats__text">{{ $flats->text_field }}</p>
                </div>
                <div class="flats__col2 layout-choice">
                    <div class="layout-choice__btns-wrapper">
                        <p class="layout-choice__title">Количество комнат</p>
                        <ul class="layout-choice__btns-list">
                            @foreach($flats->dom_flat_group as $item)
                                @if($item->show_field == 1)
                                    <li class="layout-choice__btns-item">
                                        <button class="layout-choice__button js_rooms_btn"
                                                data-id="{{$item->id_field}}">{{$item->dom_flat_name_field}}</button>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </div>
                    <div class="layout-choice__btns-wrapper">
                        <p class="layout-choice__title">Площадь</p>
                        <ul class="layout-choice__btns-list">
                            @foreach($flats->dom_flat_group as $item)
                                @foreach($item->layout_group as $layout_item)
                                    <li class="layout-choice__btns-item">
                                        <button class="layout-choice__button js_area_btn layout-choice__button--area @if($layout_item->labeled)layout-choice__button--labeled @endif flat{{$item->id_field}}"
                                                data-id="{{$layout_item->id_field}}">{{str_replace('.', ',', $layout_item->area_field)}}
                                            м<sup class="layout-choice__btn-sup">2</sup></button>
                                    </li>
                                @endforeach
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flats__layout layout">
                <div class="layout__img-wrapper">
                    <img src="" alt="" class="layout__img js_give_src">
                </div>
                <div class="layout__feedback-info-wrapper">
                    <div class="layout__common-info-wrapper">
                        <div class="layout__info">
                            <p class="layout__flat-name js_layout_name"></p>
                            <div class="layout__info-row">
                                <div class="layout__row-item">
                                    <p class="layout__info-title">Площадь</p>
                                    <p class="layout__info-value"><span
                                                class="layout__info-value-text js_give_area"></span>м<sup
                                                class="layout__area-sup">2</sup></p>
                                </div>
                                <div class="layout__row-item">
                                    <p class="layout__info-title">Блок</p>
                                    <p class="layout__info-value js_give_block"></p>
                                </div>
                                <div class="layout__row-item">
                                    <p class="layout__info-title">Этаж</p>
                                    <p class="layout__info-value js_give_floor"></p>
                                </div>
                            </div>
                            <div class="layout__price-wrap">
                                <p class="layout__price-title">Цена за 1 м<sup class="layout__sup">2</sup>:</p>
                                <p class="layout__price js_give_price"></p>
                            </div>
                            <div class="layout__price-wrap">
                                <p class="layout__price-title">Стоимость при 100% оплате:</p>
                                <p class="layout__price js_at_once_price"></p>
                            </div>
                        </div>
                        <div class="layout__discount-price-wrap js_discount_wrap">
                            <p class="layout__discount-price-title">Цена за 1 м<sup class="layout__sup">2</sup> cо скидкой:</p>
                            <p class="layout__discount-price js_give_price_discount"></p>
                            <p class="layout__discount-price-title">Стоимость cо скидкой:</p>
                            <p class="layout__discount-price js_at_once_price_discount"></p>
                        </div>
                    </div>
                    <div class="layout__feedback layout-feedback">
                        <p class="layout-feedback__calculation-method">
                            На планировке указана проектная площадь. Расчет осуществляется по фактической площади.
                        </p>
                        <p class="layout-feedback__title">ПОНРАВИЛАСЬ КВАРТИРА?</p>
                        <p class="layout-feedback__text">Свяжитесь с нами и узнайте подробности</p>
                        <div class="layout-feedback__input-rows form-id" id="layout_call">
                            <input type="hidden" name="form" class="form-input" value="call">
                            <div class="layout-feedback__row form-row">
                                <div class="form-row__validation-wrap layout-feedback-input">
                                    <label class="layout-feedback-input__label layout-feedback-input__label--name"
                                           for="layout_name"><span class="layout-feedback-input__label-text">Имя</span></label>
                                    <input type="text" name="client_name" id="layout_name" autocomplete="false" required
                                           class="form-row__input form-input layout-feedback-input__input">
                                    <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                                class="form-row__tooltip form-row__tooltip--border">Как к вам
                                            обращаться</p></div>
                                </div>
                            </div>

                            <div class="layout-feedback__row form-row">
                                <div class="form-row__validation-wrap layout-feedback-input">
                                    <input type="tel" id="layout_tel"
                                           class="form-row__input form-input layout-feedback-input__input layout-feedback-input__input--tel js_phone_input"
                                           maxlength="25" data-mask="(999) 999-99-99" name="phone">
                                    <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                                class="form-row__tooltip form-row__tooltip--border">Телефонный номер для
                                            связи</p></div>
                                    <label class="layout-feedback-input__label layout-feedback-input__label--tel"
                                           for="layout_tel"><span
                                                class="layout-feedback-input__label-text layout-feedback-input__label-text--tel">+7</span></label>
                                </div>
                            </div>
                            <div class="layout-feedback__row layout-feedback__row--btn">
                                <input type="submit" value="УЗНАТЬ ПОДРОБНЕЕ"
                                       class="layout-feedback__btn form-row__send-form button-tr button-tr--yellow-br send-form">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    @if ($commerce->commerce_layout_group->count())
    <section class="flats">
        <div class="flats__wrapper">
            <div class="flats__top-wrapper">
                <div class="flats__col1">
                    <h2 class="flats__title flats__title--commerce" id="commerce">{{ $commerce->block_title_field }}</h2>
                </div>
                <div class="flats__col2 layout-choice">
                    <div class="layout-choice__btns-wrapper">
                        <p class="layout-choice__title">Площадь</p>
                        <ul class="layout-choice__btns-list">
                            @foreach($commerce->commerce_layout_group as $layout_item)
                                <li class="layout-choice__btns-item">
                                    <button class="layout-choice__button js_area_btn_com layout-choice__button--area @if($layout_item->labeled)layout-choice__button--labeled @endif"
                                            data-id="{{$layout_item->id_field}}">{{str_replace('.', ',', $layout_item->area_field)}}
                                        м<sup class="layout-choice__btn-sup">2</sup></button>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flats__layout layout">
                <div class="layout__img-wrapper">
                    <img src="" alt="" class="layout__img js_give_src_com">
                </div>
                <div class="layout__feedback-info-wrapper">
                    <div class="layout__common-info-wrapper">
                        <div class="layout__info">
                            <p class="layout__flat-name js_com_layout_name"></p>
                            <div class="layout__info-row">
                                <div class="layout__row-item">
                                    <p class="layout__info-title">Площадь</p>
                                    <p class="layout__info-value"><span
                                                class="layout__info-value-text js_give_area_com"></span>м<sup
                                                class="layout__area-sup">2</sup></p>
                                </div>
                                <div class="layout__row-item">
                                    <p class="layout__info-title">Этаж</p>
                                    <p class="layout__info-value js_give_floor_com"></p>
                                </div>
                            </div>
                            <div class="layout__price-wrap">
                                <p class="layout__price-title">Цена за 1 м<sup class="layout__sup">2</sup>:</p>
                                <p class="layout__price js_give_price_com"></p>
                            </div>
                            <div class="layout__price-wrap">
                                <p class="layout__price-title">Стоимость при 100% оплате:</p>
                                <p class="layout__price js_at_once_price_com"></p>
                            </div>
                        </div>
                        <div class="layout__discount-price-wrap js_discount_wrap_com">
                            <p class="layout__discount-price-title">Цена за 1 м<sup class="layout__sup">2</sup> cо скидкой:</p>
                            <p class="layout__discount-price js_give_price_discount_com"></p>
                            <p class="layout__discount-price-title">Стоимость cо скидкой:</p>
                            <p class="layout__discount-price js_at_once_price_discount_com"></p>
                        </div>
                    </div>
                    <div class="layout__feedback layout-feedback">
                        <p class="layout-feedback__calculation-method">
                            На планировке указана проектная площадь. Расчет осуществляется по фактической площади.
                        </p>
                        <p class="layout-feedback__title">ПОНРАВИЛОСЬ ПОМЕЩЕНИЕ?</p>
                        <p class="layout-feedback__text">Свяжитесь с нами и узнайте подробности</p>
                        <div class="layout-feedback__input-rows form-id" id="com_layout_call">
                            <input type="hidden" name="form" class="form-input" value="call">
                            <div class="layout-feedback__row form-row">
                                <div class="form-row__validation-wrap layout-feedback-input">
                                    <label class="layout-feedback-input__label layout-feedback-input__label--name"
                                           for="com_layout_name"><span class="layout-feedback-input__label-text">Имя</span></label>
                                    <input type="text" name="client_name" id="com_layout_name" autocomplete="false" required
                                           class="form-row__input form-input layout-feedback-input__input">
                                    <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                                class="form-row__tooltip form-row__tooltip--border">Как к вам
                                            обращаться</p></div>
                                </div>
                            </div>

                            <div class="layout-feedback__row form-row">
                                <div class="form-row__validation-wrap layout-feedback-input">
                                    <input type="tel" id="com_layout_tel"
                                           class="form-row__input form-input layout-feedback-input__input layout-feedback-input__input--tel js_phone_input"
                                           maxlength="25" data-mask="(999) 999-99-99" name="phone">
                                    <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                                class="form-row__tooltip form-row__tooltip--border">Телефонный номер для
                                            связи</p></div>
                                    <label class="layout-feedback-input__label layout-feedback-input__label--tel"
                                           for="com_layout_tel"><span
                                                class="layout-feedback-input__label-text layout-feedback-input__label-text--tel">+7</span></label>
                                </div>
                            </div>
                            <div class="layout-feedback__row layout-feedback__row--btn">
                                <input type="submit" value="УЗНАТЬ ПОДРОБНЕЕ"
                                       class="layout-feedback__btn form-row__send-form button-tr button-tr--yellow-br send-form">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @endif

    <section class="stages">
        <div class="stages__top-wrapper">
            <div class="stages__col1">
                <h2 class="stages__title" id="stages">{{ $stages->block_title_field }}</h2>
                <p class="stages__text">{{ $stages->text_field }}</p>
            </div>
            {{--<div class="stages__col2">
                <div class="stages__radial-col">
                    <input value="{{ $stages->percent_field }}" data-width="100%" data-thickness=".04" type="text" class="stages__radial js_radial" data-bgColor="#FFFFFF" readonly data-fgColor="#ddc777" data-displayInput="false" data-rotation="anticlockwise">
                </div>
                <div class="stages__percent-col">
                    <p class="stages__percent-text">Готовность<br>жилого комплекса</p>
                    <p class="stages__percent-digit-wrap"><span class="stages__percent-digit">{{ $stages->percent_field }}</span>%</p>
                </div>
            </div>--}}
        </div>
        <div class="stages__date-list-wrapper">
            <ul class="stages__list">
                @foreach($stages->dom_stages_group as $stage)
                    <li class="stages__item js_stage_btn" data-id="{{$stage->id_field}}">
                        <button class="stages__item-btn">{{$stage->dom_stages_name_field}}</button>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="stages__stage-wrapper">
            <div class="stages__fotorama js_stages__fotorama fotorama" data-auto="false" data-ratio="820/490"
                 data-nav="none" data-allowfullscreen="true"
                 data-loop="true" data-transition="crossfade">
            </div>
            <p class="stages__stage-text js_give_stage_text"></p>
        </div>
    </section>
    <section class="contacts">
        <div class="contacts__wrapper">
            <div class="contacts__contact-block">
                <div class="contacts__contact-block-wrapper">
                    <h2 class="contacts__title" id="contacts">{!! $contacts->block_title_field !!}</h2>
                    <div class="contacts__input-rows form-id" id="contacts_call">
                        <input type="hidden" name="form" class="form-input" value="call">
                        <div class="contacts__row form-row">
                            <div class="form-row__validation-wrap contacts-input">
                                <label class="contacts-input__label contacts-input__label--name"
                                       for="contact_name"><span class="contacts-input__label-text">Имя</span></label>
                                <input type="text" name="client_name" id="contact_name" autocomplete="false" required
                                       class="form-row__input form-input contacts-input__input">
                                <label class="contacts-input__placeholder" for="contact_name">Введите имя</label>
                                <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                            class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p>
                                </div>
                            </div>
                        </div>

                        <div class="contacts__row form-row">
                            <div class="form-row__validation-wrap contacts-input">
                                <label class="contacts-input__label contacts-input__label--tel" for="contact_tel"><span
                                            class="contacts-input__label-text">Телефон</span></label>
                                <input type="tel" id="contact_tel"
                                       class="form-row__input form-input contacts-input__input contacts-input__input--tel js_phone_input"
                                       maxlength="25" data-mask="(999) 999-99-99" name="phone">
                                <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p
                                            class="form-row__tooltip form-row__tooltip--border">Телефонный номер для
                                        связи</p></div>
                                <label class="contacts-input__num-label" for="contact_tel">+7</label>
                            </div>
                        </div>
                        <div class="contacts__row contacts__row--btn">
                            <input type="submit" value="ЗАКАЗАТЬ ЗВОНОК"
                                   class="contacts__btn form-row__send-form button send-form">
                        </div>
                    </div>
                </div>
            </div>
            <div class="contacts__map-wrapper">
                <div class="contacts__map" id="map"></div>
                <div class="contact-plate">
                    <a href="tel:{{ $contacts->phone_field }}"
                       class="contact-plate__phone">{{ $contacts->phone_field }}</a>
                    <p class="contact-plate__addr">{!! $main_block->address_field !!}</p>
                </div>
            </div>
        </div>
    </section>
    <a href="#title" class="to-top js_goto_anchor js-top-btn" title="Перейти наверх страницы" style="display: none">
        <span class="to-top__arrow"></span>
    </a>
    <div class="vl"></div>
    @include('front.index.meta')
@endsection
