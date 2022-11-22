<?php

namespace App\Http\Controllers;

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
}
