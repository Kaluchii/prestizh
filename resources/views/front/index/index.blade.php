@extends('front.layout')
@section('content')
{{--@include('front.index.stages_obj')
@yield('stageObj')--}}
    <div class="top-phone"><a href="tel:{{ $contacts->phone_field }}" class="top-phone-link">{{ $contacts->phone_field }}</a></div>
    <section class="title-block" id="title">
        <header class="title-block__header title-header">
            <div class="title-block__menu-button js_menu"></div>
            <div class="title-header__logo-wrap">
                <img src="/img/logo.png" alt="Жилой комплекс Престиж" class="title-header__logo">
            </div>
            <nav class="title-header__nav-wrap">
                <div class="title-header__menu-logo-wrap">
                    <img src="/img/dark_logo.png" alt="Жилой комплекс Престиж" class="title-header__menu-logo">
                </div>
                <ul class="title-header__nav-list">
                    <li class="title-header__nav-item"><a href="#about" class="js_goto_anchor title-header__nav-link">О комплексе</a></li>
                    <li class="title-header__nav-item"><a href="#gallery" class="js_goto_anchor title-header__nav-link">Галерея</a></li>
                    <li class="title-header__nav-item"><a href="#flats" class="js_goto_anchor title-header__nav-link">Планировки</a></li>
                    <li class="title-header__nav-item"><a href="#stages" class="js_goto_anchor title-header__nav-link">Стройка</a></li>
                    <li class="title-header__nav-item"><a href="#contacts" class="js_goto_anchor title-header__nav-link">Контакты</a></li>
                </ul>
            </nav>
            <div class="title-header__feedback-wrap">
                <div class="title-header__phone-wrap">
                    <p class="title-header__consult">Позвоните для консультации</p>
                    <p class="title-header__phone-number">{{ $contacts->phone_field }}</p>
                </div>
                <a href="#contacts" class="js_goto_anchor title-header__order-call button"><span class="title-header__btn-text">ЗАКАЗАТЬ ЗВОНОК</span></a>
            </div>
        </header>
        <div class="title-block__text-wrap">
            <div class="title-block__col1">
                <h1 class="title-block__title">{{ $main_block->block_title_field }}</h1>
                <p class="title-block__price-wrap">
                    <span class="title-block__price">{{ $main_block->price_field }}</span>
                    <span class="title-block__t-m"><span class="title-block__t">T</span><span class="title-block__m">м<sup>2</sup></span></span>
                </p>
                <p class="title-block__address">{!! $main_block->address_field !!}</p>
            </div>
            <div class="title-block__col2">
                <p class="title-block__installment">РАССРОЧКА<br>ОТ ЗАСТРОЙЩИКА</p>
                <div class="title-block__popup title-popup">
                    <div class="title-popup__wrapper">
                        <p class="title-popup__top-text">ПРИ ПОКУПКЕ КВАРТИРЫ</p>
                        <p class="title-popup__middle-text">ПАРКИНГ</p>
                        <p class="title-popup__bottom-text">В ПОДАРОК!</p>
                        <hr class="title-popup__hr">
                        <p class="title-popup__interest-text">ЗАИНТЕРЕСОВАЛИСЬ?</p>

                        <div class="title-popup__input-rows form-id" id="popup_call">
                            <input type="hidden" name="form" class="form-input" value="call">
                            <div class="title-popup__row form-row">
                                <div class="form-row__validation-wrap popup-input">
                                    <label class="popup-input__label popup-input__label--name"><span class="popup-input__label-text">Имя</span></label>
                                    <input type="text" name="client_name" required class="form-row__input form-input popup-input__input">
                                    <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p></div>
                                </div>
                            </div>

                            <div class="title-popup__row form-row">
                                <div class="form-row__validation-wrap popup-input">
                                    <label class="popup-input__label popup-input__label--tel"><span class="popup-input__label-text">+7</span></label>
                                    <input type="tel" class="form-row__input form-input popup-input__input" maxlength="25" data-mask="(000) 000-00-00" name="phone">
                                    <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Телефонный номер для связи</p></div>
                                </div>
                            </div>
                            <div class="title-popup__row title-popup__row--btn">
                                <input type="submit" value="УЗНАТЬ ПОДРОБНЕЕ" class="title-popup__btn form-row__send-form button-tr send-form">
                            </div>
                        </div>
                        <div class="title-popup__close js_popup_close"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about" id="about">
        <div class="about__wrapper">
            <div class="about__text-wrap">
                <h2 class="about__title">{{ $about->block_title_field }}</h2>
                <p class="about__text">{!! $about->text_field !!}</p>
            </div>
            <div class="about__in-detail in-detail">
                <div class="in-detail__triad">
                    <div class="in-detail__item detail-item">
                        <div class="detail-item__img-wrap"><img src="{{$about->image1->link_field}}?{{$about->image1->cache_index}}" alt="{{$about->image1->alt_field}}" height="400" width="400" class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title1_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text1_field !!}</p>
                        </div>
                    </div>
                    <div class="in-detail__item detail-item detail-item--middle">
                        <div class="detail-item__img-wrap"><img src="{{$about->image2->link_field}}?{{$about->image2->cache_index}}" alt="{{$about->image2->alt_field}}" height="330" width="330" class="detail-item__img"></div>
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
                        <div class="detail-item__img-wrap"><img src="{{$about->image3->link_field}}?{{$about->image3->cache_index}}" alt="{{$about->image3->alt_field}}" height="170" width="180" class="detail-item__img"></div>
                    </div>
                </div>
                <div class="in-detail__triad in-detail__triad--right-align">
                    <div class="in-detail__item detail-item">
                        <div class="detail-item__img-wrap"><img src="{{$about->image4->link_field}}?{{$about->image4->cache_index}}" alt="{{$about->image4->alt_field}}" height="400" width="400" class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title4_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text4_field !!}</p>
                        </div>
                    </div>
                    <div class="in-detail__item detail-item detail-item--middle">
                        <div class="detail-item__img-wrap"><img src="{{$about->image5->link_field}}?{{$about->image5->cache_index}}" alt="{{$about->image5->alt_field}}" height="330" width="330" class="detail-item__img"></div>
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
                        <div class="detail-item__img-wrap"><img src="{{$about->image6->link_field}}?{{$about->image6->cache_index}}" alt="{{$about->image6->alt_field}}" height="170" width="180" class="detail-item__img"></div>
                    </div>
                </div>
                <div class="in-detail__triad">
                    <div class="in-detail__item detail-item">
                        <div class="detail-item__img-wrap"><img src="{{$about->image7->link_field}}?{{$about->image7->cache_index}}" alt="{{$about->image7->alt_field}}" height="400" width="400" class="detail-item__img"></div>
                        <div class="detail-item__text-wrap">
                            <h3 class="detail-item__title">{!! $about->title7_field !!}</h3>
                            <p class="detail-item__text">{!! $about->text7_field !!}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="gallery" id="gallery">
        <div class="gallery__wrapper">
            <h2 class="gallery__title">{{ $gallery->block_title_field }}</h2>
            <div class="gallery__fotorama-wrap">
                <div class="js_gallery__fotorama fotorama"  data-auto="false" data-ratio="1140/510"
                     data-nav="thumbs" data-allowfullscreen="true"
                     data-thumbmargin="15" data-loop="true"
                     data-thumbwidth="110" data-thumbheight="100" data-transition="crossfade">
                    <?php $slider_arr = [] ?>
                    @foreach($gallery->slider_group as $slide)
                        <a href="{{$slide->slide_field->link}}?{{$slide->slide_field->cache_index}}"></a>
                        <?php $slider_arr[] = $slide->slide_field->link.'?'.$slide->slide_field->cache_index ?>
                    @endforeach
                </div>
            </div>
            <div class="for-Google-PageSpeed">
                @for($i = 0; $i < 9, isset($slider_arr[$i]); $i++)
                    <img src="{{ $slider_arr[$i] }}" alt="">
                @endfor
                @foreach($stages->dom_stages_group as $stage)
                    @if($stage->show_field == 1)
                        @foreach($stage->stage_images_group as $stage_img)
                            <img src="{{$stage_img->stage_photo_field->link}}?{{$stage_img->stage_photo_field->cache_index}}" alt="">
                        @endforeach
                    @endif
                    @break
                @endforeach
            </div>
            <div class="gallery__mobile-gallery mobile-gallery">
                <div class="mobile-gallery__top-row">
                    <div class="mobile-gallery__col">
                        <div class="mobile-gallery__img-wrap mobile-gallery__img-wrap--left-big">
                            <div class="mobile-gallery__pseudo-img js_open_fotorama" data-img="1" style="background-image: url('{{$slider_arr[0] or "/img/1140x510.jpg"}}')"></div>
                        </div>
                        <div class="mobile-gallery__small-row">
                            <div class="mobile-gallery__img-wrap mobile-gallery__img-wrap--left-small">
                                <div class="mobile-gallery__pseudo-img js_open_fotorama" data-img="2" style="background-image: url('{{$slider_arr[1] or "/img/1140x510.jpg"}}')"></div>
                            </div>
                            <div class="mobile-gallery__img-wrap mobile-gallery__img-wrap--left-small">
                                <div class="mobile-gallery__pseudo-img js_open_fotorama" data-img="3" style="background-image: url('{{$slider_arr[2] or "/img/1140x510.jpg"}}')"></div>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-gallery__col">
                        <div class="mobile-gallery__img-wrap mobile-gallery__img-wrap--right-small">
                            <div class="mobile-gallery__pseudo-img js_open_fotorama" data-img="4" style="background-image: url('{{$slider_arr[3] or "/img/1140x510.jpg"}}')"></div>
                        </div>
                        <div class="mobile-gallery__img-wrap mobile-gallery__img-wrap--right-big">
                            <div class="mobile-gallery__pseudo-img js_open_fotorama" data-img="5" style="background-image: url('{{$slider_arr[4] or "/img/1140x510.jpg"}}')"></div>
                        </div>
                    </div>
                </div>
                <div class="mobile-gallery__big-img-wrap">
                    <div class="mobile-gallery__pseudo-img js_open_fotorama" data-img="6" style="background-image: url('{{$slider_arr[5] or "/img/1140x510.jpg"}}')"></div>
                </div>
            </div>
        </div>
    </section>
    {{--<section class="feedbacks">
        <div class="feedbacks__wrapper js_revealOnScroll" data-viewport-offset="30" data-animation="display">
            <h2 class="feedbacks__title">Вам понравился<br>ЖК Центральный?</h2>
            <div class="feedbacks__sub-title">Оставьте ваши контакты, и наши менеджеры ответят на все ваши вопросы.</div>
            <div class="feedbacks__input-rows form-id" id="feedback_call">
                <input type="hidden" name="form" class="form-input" value="call">
                <div class="feedback-form__row form-row">
                    <div class="form-row__validation-wrap feedbacks-input">
                        <label class="feedbacks-input__label feedbacks-input__label--name"><span class="feedbacks-input__label-text">Имя</span></label>
                        <input type="text" name="client_name" required class="form-row__input form-input feedbacks-input__input">
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p></div>
                    </div>
                </div>

                <div class="feedback-form__row form-row">
                    <div class="form-row__validation-wrap feedbacks-input">
                        <label class="feedbacks-input__label feedbacks-input__label--tel"><span class="feedbacks-input__label-text">+7</span></label>
                        <input type="tel" class="form-row__input form-input feedbacks-input__input" maxlength="25" data-mask="(000) 000-00-00" name="phone">
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Телефонный номер для связи</p></div>
                    </div>
                </div>
                <div class="feedbacks__input-wrapper feedbacks__input-wrapper--btn">
                    <input type="submit" value="Перезвонить мне" class="feedbacks__btn form-row__send-form button send-form">
                </div>
            </div>
        </div>
    </section>
    <section class="flats" id="flats" data-exchange="{{$prices->dollar_field}}">
        <div class="flats__wrapper">
            <div class="flats__layout-choice layout-choice">
                <h2 class="layout-choice__title">{{ $flats->block_title_field }}</h2>
                <div class="layout-choice__wrap">
                    <div class="layout-choice__nav">
                        <div class="layout-choice__section">
                            <p class="layout-choice__section-title">ВЫБЕРИТЕ КОЛИЧЕСТВО КОМНАТ</p>
                            <ul class="layout-choice__list">
                                @foreach($flats->dom_flat_group as $item)
                                    <li class="layout-choice__item"><button class="layout-choice__button js_rooms_btn" data-id="flat{{$item->id_field}}" data-singularly="{{$item->singularly_field}}">{{$item->dom_flat_name_field}}</button></li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="layout-choice__section">
                            <p class="layout-choice__section-title">ВЫБЕРИТЕ ПЛОЩАДЬ</p>
                            <ul class="layout-choice__list">
                                @foreach($flats->dom_flat_group as $item)
                                    @foreach($item->layout_group as $layout_item)
                                        <li class="layout-choice__item"><button class="layout-choice__button js_area_btn layout-choice__button--area flat{{$layout_item->superior_item->id_field}}" data-img="{{$layout_item->layout_scheme->link_field}}?{{$layout_item->layout_scheme->cache_index}}" data-area="{{$layout_item->area_field}}" data-cost="{{$layout_item->meter_cost_field}}">{{$layout_item->area_field}} м<sup class="layout-choice__btn-sup">2</sup></button></li>
                                    @endforeach
                                @endforeach
                            </ul>
                        </div>
                        <div class="layout-choice__section">
                            <p class="layout-choice__section-title">СТОИМОСТЬ КВАРТИРЫ ОТ:</p>
                            <p class="layout-choice__price"></p>
                            <p class="layout-choice__under-price"></p>
                        </div>
                    </div>
                    <div class="layout-choice__layout-view-wrap">
                        <div class="layout-choice__layout-view">
                            <img src="" alt="" class="layout-choice__img">
                            <p class="layout-choice__info"></p>
                            <div class="layout-choice__descr-wrap">
                                <p class="layout-choice__name"></p>
                                <p class="layout-choice__area"><span class="layout-choice__area-text"></span>м<sup class="layout-choice__area-sup">2</sup></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="flats__hr">
        <div class="flats__feedback-wrapper feedback-row">
            <div class="feedback-row__wrapper form-id" id="flats_call">
                <div class="feedback-row__text-wrapper">
                    <p class="feedback-row__text-title">Понравилась планировка?</p>
                    <p class="feedback-row__text">Свяжитесь с нашим менеджером и обсудите все детали.</p>
                </div>
                <div class="feedback-row__inputs-wrapper">
                    <input type="hidden" name="form" class="form-input" value="call">
                    <div class="feedback-row__input-wrapper form-row">
                        <div class="form-row__validation-wrap">
                            <label class="feedbacks-input__label feedbacks-input__label--flats feedbacks-input__label--name"><span class="feedbacks-input__label-text">Имя</span></label>
                            <input type="text" name="client_name" required class="form-row__input form-input feedbacks-input__input feedbacks-input__input--flats">
                        </div>
                    </div>
                    <div class="feedback-row__input-wrapper form-row">
                        <div class="form-row__validation-wrap">
                            <label class="feedbacks-input__label feedbacks-input__label--flats feedbacks-input__label--tel"><span class="feedbacks-input__label-text">+7</span></label>
                            <input type="tel" class="form-row__input form-input feedbacks-input__input feedbacks-input__input--flats" data-mask="(000) 000-00-00" maxlength="25" name="phone">
                        </div>
                    </div>
                    <div class="feedback-row__input-wrapper feedback-row__input-wrapper--btn form-row">
                        <input type="submit" value="Перезвонить мне" class="form-row__send-form form-row__send-form--flats send-form">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="stages" id="stages">
        <div class="stages__wrapper">
            <h3 class="stages__title">{{ $stages->block_title_field }}</h3>
            <div class="stages__row-wrap">
                <div class="stages__row">
                    @foreach($stages->dom_stages_group as $stage)
                        @if($stage->show_field == 1)
                            <button class="stages__btn js_stage_btn" id="{{$stage->id_field}}">{{$stage->dom_stages_name_field}}</button>
                        @endif
                    @endforeach
                </div>
                <div class="stages__control">
                    <div class="stages__left js_stages_left"></div>
                    <div class="stages__right js_stages_right"></div>
                </div>
            </div>
            <div class="stages__text-wrap">
                <p class="stages__text js_give_me_text"></p>
            </div>
            <ul class="stages__images-list js_fotorama_thumbs">
            </ul>
            <div class="stages__fotorama js_stages_fotorama fotorama"
                 data-nav="thumbs" data-allowfullscreen="true"
                 data-thumbmargin="15" data-loop="true"
                 data-thumbwidth="110" data-thumbheight="100"
                 data-auto="false" data-transition="crossfade">
            </div>
        </div>
    </section>--}}
    <section class="contacts" id="contacts">
        <div class="contacts__wrapper">
            <div class="contacts__contact-block">
                <div class="contacts__contact-block-wrapper">
                    <h2 class="contacts__title">{{ $contacts->block_title_field }}</h2>
                    <p class="contacts__text">{{ $contacts->text_field }}</p>
                    <div class="contacts__input-rows form-id" id="contacts_call">
                        <input type="hidden" name="form" class="form-input" value="call">
                        <div class="contacts__row form-row">
                            <div class="form-row__validation-wrap contacts-input">
                                <label class="contacts-input__label contacts-input__label--name" for="contact_name"><span class="contacts-input__label-text">Имя</span></label>
                                <input type="text" name="client_name" id="contact_name" placeholder="Введите имя" autocomplete="false" required class="form-row__input form-input contacts-input__input">
                                <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p></div>
                            </div>
                        </div>

                        <div class="contacts__row form-row">
                            <div class="form-row__validation-wrap contacts-input">
                                <label class="contacts-input__label contacts-input__label--tel" for="contact_tel"><span class="contacts-input__label-text">Телефон</span></label>
                                <input type="tel" id="contact_tel" class="form-row__input form-input contacts-input__input contacts-input__input--tel" maxlength="25" data-mask="(000) 000-00-00" name="phone">
                                <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Телефонный номер для связи</p></div>
                                <label class="contacts-input__num-label" for="contact_tel">+7</label>
                            </div>
                        </div>
                        <div class="contacts__row contacts__row--btn">
                            <input type="submit" value="ЗАКАЗАТЬ ЗВОНОК" class="contacts__btn form-row__send-form button send-form">
                        </div>
                    </div>
                </div>
            </div>
            <div class="contacts__map-wrapper">
                <div class="contacts__map" id="map"></div>
            </div>
        </div>
    </section>
    @include('front.index.meta')
@endsection
