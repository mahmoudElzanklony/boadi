<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LangController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\AuthController;

use App\Http\Controllers\NotificationsController;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdsController;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\DB;
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

Route::group(['middleware'=>'changeLang'],function (){
    Route::get('/',[WelcomeController::class,'index']);
    Route::get('/home',[WelcomeController::class,'index']);


    Route::get('/contactus',[\App\Http\Controllers\ContactUsController::class,'contactus']);
    Route::get('/aboutus',[WelcomeController::class,'about_us']);
    Route::get('/aboutbook',[WelcomeController::class,'about_book']);
    Route::get('/lang/{lang}',[LangController::class,'index']);
    // auth pages
    Route::get('/login',[AuthController::class,'login'])->name('login')->middleware('guest');
    Route::get('/register',[AuthController::class,'register'])->middleware('guest');;
    Route::get('/forget-password',[AuthController::class,'forget_password']);
    Route::get('/new-password',[AuthController::class,'new_password']);
    Route::get('/logout',[AuthController::class,'logout'])->middleware('auth');


    Route::get('/sendmail',[\App\Http\Controllers\MailController::class,'basic_email']);

    Route::get('/ads',[AdsController::class,'index']);

    Route::group(['prefix'=>'/dashboard','middleware'=>'auth'],function (){
       Route::get('/',[DashboardController::class,'index']);
       Route::get('/uploadfile',[DashboardController::class,'upload_files']);
       Route::get('/definitions',[DashboardController::class,'definitions']);
       Route::get('/ads',[DashboardController::class,'ads']);
       Route::get('/contactus',[DashboardController::class,'contactus']);
       Route::get('/settings',[DashboardController::class,'settings']);
    });

});
