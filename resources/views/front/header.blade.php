@section('header')
    <div class="fixed-header">
        <div class="fixed-header__header header">
            <div class="header__logo-wrap header__logo-wrap--fixed">
                <a href="#title" class="header__logo-link js_goto_anchor"><img src="/img/logo.png" alt="Жилой комплекс Престиж" class="header__logo header__logo--fixed"></a>
            </div>
            <div class="header__nav-wrap js_fixed_nav_wrap">
                <ul class="header__nav-list">
                    <li class="header__nav-item header__nav-item--fixed"><a href="#about" class="js_goto_anchor header__nav-link">О комплексе</a></li>
                    <li class="header__nav-item header__nav-item--fixed"><a href="#gallery" class="js_goto_anchor header__nav-link">Галерея</a></li>
                    <li class="header__nav-item header__nav-item--fixed"><a href="#flats" class="js_goto_anchor header__nav-link">Планировки</a></li>
                    <li class="header__nav-item header__nav-item--fixed"><a href="#stages" class="js_goto_anchor header__nav-link">Стройка</a></li>
                    <li class="header__nav-item header__nav-item--fixed"><a href="#contacts" class="js_goto_anchor header__nav-link">Контакты</a></li>
                </ul>
            </div>
            <div class="header__feedback-wrap">
                <div class="header__phone-wrap">
                    <p class="header__consult">Позвоните для консультации</p>
                    <p class="header__phone-number"><a href="tel:{{ $contacts->phone_field }}" class="header__phone-number-link">{{ $contacts->phone_field }}</a></p>
                </div>
                <a href="#contacts" class="js_goto_anchor header__order-call button"><span class="header__btn-text">ЗАКАЗАТЬ ЗВОНОК</span></a>
            </div>
            <div class="header__menu-button menu-button js_fixed_menu">
                <div class="menu-button__rows-wrap">
                    <span class="menu-button__top"></span>
                    <span class="menu-button__middle"></span>
                    <span class="menu-button__bottom"></span>
                </div>
            </div>
        </div>
    </div>
@endsection