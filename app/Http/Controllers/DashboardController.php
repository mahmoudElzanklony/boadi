<?php

namespace App\Http\Controllers;

use App\Handling_Data\dashboard\ads_dashboard;
use App\Handling_Data\dashboard\contact_dashboard;
use App\Handling_Data\dashboard\definitions_dashboard;

use App\Handling_Data\dashboard\support_dashboard;
use App\Http\Controllers\classes\DashboardServiceClass;
use App\Keywords\dashboard\BrandsKeywords;
use App\Keywords\dashboard\IndexKeywords;
use App\Keywords\dashboard\ProductsKeywords;
use App\Keywords\dashboard\StatisticsKeywords;

use App\Models\categories;
use App\Models\contact;
use App\Models\countries;
use App\Models\definisions;
use App\Models\notifications;
use App\Models\Tags;
use App\Services\statistics\filter_statistics_admin;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends DashboardServiceClass
{
    //

    public function __construct()
    {
        if(session()->get('type') != 'admin'){
           // return redirect('/')->send();
        }
        // note
        // change-map make this route public for any one not only admin
    }

    public function index(){
        return redirect('/dashboard/definitions');
    }


    public function definitions(){
        return Inertia::render('dashboard/definitions',[
            'main_title'=>trans('keywords.definitions'),
            'handling_data'=>definitions_dashboard::handle_data(),
        ]);
    }

    public function upload_files(){
        return Inertia::render('dashboard/upload_files',[
            'main_title'=>trans('keywords.upload_files'),
            'handling_data'=>[

            ],
        ]);
    }

    public function ads(){
        return Inertia::render('dashboard/ads',[
            'main_title'=>trans('keywords.ads'),
            'handling_data'=>ads_dashboard::handle_data()
        ]);
    }

    public function contactus(){
        return Inertia::render('dashboard/contact_us',[
            'main_title'=>trans('keywords.messages'),
            'handling_data'=>contact_dashboard::handle_data()
        ]);
    }



    public function support(){
        return Inertia::render('dashboard/support',[
            'main_title'=>trans('keywords.support'),
            'handling_data' => support_dashboard::handle_data(),
        ]);
    }


    public function settings(){
        return Inertia::render('dashboard/settings',[
            'main_title'=>trans('keywords.update_main_info'),
            'keywords'=>[
                'username'=>trans('keywords.username'),
                'email'=>trans('keywords.email'),
                'password'=>trans('keywords.password'),
                'phone'=>trans('keywords.phone'),
            ]
        ]);
    }

}
