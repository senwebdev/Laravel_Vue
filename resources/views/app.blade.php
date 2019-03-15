<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Title -->
    <title>{{ env('APP_NAME') }}</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">
</head>
<body>
<!-- Main div for Vue -->
<div id="app"></div>
<!-- Main JS file for Vue -->
<script src="{{ asset('js/app.js') }}"></script>
<!-- Main JS file for Bulma -->
<script src="{{ asset('js/bulma.js') }}"></script>
<!-- ToDo: Dashboard js file. should be removed when finished. -->
<script src="{{ asset('js/dashboard.js') }}"></script>
</body>
</html>
