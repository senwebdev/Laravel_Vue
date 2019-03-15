<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Password reset link request routes...
Route::get('password/email', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.email');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');

// Password reset routes...
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');

// Voyager routes.
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

// Vue route for resetting user password.
Route::get('auth/reset/{token}', function (){
    return view('app');
})->name('vue.password.request');

// Vue routes.
Route::get('{args1?}/{args2?}/{args3?}', function () {
    return view('app');
});
