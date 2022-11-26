<?php

namespace App\Http\Controllers;

use App\Http\traits\messages;
use App\Models\ads;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdsController extends Controller
{
    //
    public function index(){
        return Inertia::render('ads',[
           'keywords'=>[
               'current_ads'=>trans('keywords.current_ads'),
               'website_name'=>trans('keywords.website_name'),
               'website_word'=>trans('keywords.website_word'),
               'your_feedback'=>trans('keywords.your_feedback'),
           ]
        ]);
    }


    public function load_ads(){
        return messages::success_output('',ads::query()->where('is_visible','=',1)->get());
    }
}
