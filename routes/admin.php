<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\classes\DashboardServiceClass;

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

Route::group(['middleware'=>'changeLang','prefix'=>'/dashboard'],function (){
    Route::post('/save-definition',[DashboardServiceClass::class,'save_definition']);
    Route::post('/save-user',[DashboardServiceClass::class,'save_user']);
    Route::post('/save-files',[DashboardServiceClass::class,'save_files']);
    Route::post('/save-ad',[DashboardServiceClass::class,'save_ad']);
    Route::post('/filter-statistics',[DashboardServiceClass::class,'filter_statistics']);
    Route::post('/save-support',[DashboardServiceClass::class,'save_support']);
    Route::post('/save-settings',[DashboardServiceClass::class,'save_settings']);
});
