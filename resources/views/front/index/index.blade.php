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
                <script>
                    function initMap() {
                        var prestizh = {lat: 43.236143, lng: 76.919868};
                        var map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 16,
                            disableDefaultUI: true,
                            center: prestizh
                        });
                        var image = {
                            url: '/img/map_icon.png',
                            size: new google.maps.Size(102, 96),
                            anchor: new google.maps.Point(95, 27)
                        };
                        var marker = new google.maps.Marker({
                            position: prestizh,
                            icon: image,
                            map: map
                        });
                    }
                </script>
            </div>
        </div>
    </section>
    @include('front.index.meta')
@endsection
