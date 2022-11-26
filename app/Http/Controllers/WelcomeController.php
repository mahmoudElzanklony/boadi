<?php

namespace App\Http\Controllers;

use App\Handling_Data\welcome_handling;
use App\Keywords\WelcomeKeyWords;
use App\Services\Info_Expressions;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\countriesImportCSV;

class WelcomeController extends Controller
{
    //
    public function index(){
        //return request()->cookie('inilalize');
        if(session()->get('lang') == 'en'){
            $letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','S','R','T','X','Y','Z'];
        }else{
            $letters = ['ا','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ى'];
        }
        return Inertia::render('home',[
            'keywords'=> WelcomeKeyWords::get_key_words(),
            'data'=>welcome_handling::handle_data(),
            'letters'=>$letters
        ]);
    }

    public function import_countries(){
        $data =  Excel::import(new countriesImportCSV, request()->file('file'));
        return response()->json($data);
    }

    public function about_us(){
        return Inertia::render('about_us');
    }

    public function about_book(){
        return Inertia::render('about_book');
    }


}
