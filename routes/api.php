<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {

    Route::post('register', 'Api\AuthController@register')->name('api.auth.register');
    Route::post('login', 'Api\AuthController@login')->name('api.auth.login');
    Route::post('logout', 'Api\AuthController@logout')->name('api.auth.logout');
    Route::post('refresh', 'Api\AuthController@refresh')->name('api.auth.refresh');
    Route::post('me', 'Api\AuthController@me')->name('api.auth.me');
    Route::post('reset', 'Api\AuthController@reset')->name('api.auth.reset');
    Route::post('forgotten', 'Api\AuthController@forgotten')->name('api.auth.forgotten');

});
