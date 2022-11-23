<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\classes\general\GeneralServiceController;

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
    Route::group(['prefix'=>'/register','middleware'=>['guest']],function(){
        Route::post('/',[AuthController::class,'register_post']);
    });
    Route::post('/login',[AuthController::class,'login_post']);
    
    // user
    Route::group(['prefix'=>'/user'],function(){
        Route::post('/toggle-fav',[UsersController::class,'toggle_fav'])->middleware('auth');
        Route::post('/show-seller-phone',[UsersController::class,'show_seller_phone']);
    });
    // general
    Route::post('/deleteitem',[GeneralServiceController::class,'delete_item']);
    Route::post('/paginate-notifications',[GeneralServiceController::class,'paginate_notification_data']);
    Route::post('/paginate-data',[GeneralServiceController::class,'paginate_data_definisons']);
    // quotations
    Route::group(['prefix'=>'/quotations'],function(){
        Route::post('/get-quotations-info',[QuoationsInfoController::class,'get_info']);
    });
   // categories
    Route::group(['prefix'=>'/categories'],function(){
       Route::post('/get-subcategories-where',[CategoriesController::class,'get_sub_where']);
       Route::post('/get-parent',[CategoriesController::class,'get_parent']);
    });

    // areas
    Route::group(['prefix'=>'/areas'],function(){
        Route::post('/search',[AreasController::class,'search']);
    });

    Route::post('/contactus/save',[ContactUsController::class,'save']);


    Route::any('/dashboard/paginate-orders',[\App\Http\Controllers\DashboardController::class,'paginate_products']);

});
