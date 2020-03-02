<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/fav.png" type="image/png">

    @include('front.page-scale')
    @include('front.styles')
    @yield('styles')

    <link rel="preload" href="/fonts/Gilroy/Gilroy-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/Gilroy/Gilroy-Black.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/Gilroy/Gilroy-ExtraBold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/Gilroy/Gilroy-Light.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/Georgia/georgia.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/js/scripts.js" as="script">

    {!! $scripts->before_head_close_field !!}
    @yield('meta')
</head>
<body class="bg">
    {!! $scripts->after_open_field !!}

    @include('front.header')
    @yield('header')

    @yield('content')

    @include('front.footer')
    @yield('footer')

    @include('front.scripts')
    @yield('scripts')

    {!! $scripts->before_close_field !!}

</body>
</html>