<?php

namespace App\Http\Controllers;

use App\Http\Requests\contactFormRequest;
use App\Http\traits\messages;
use App\Models\contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    //

    public function contactus(){
        return Inertia::render('contactus',[
           'keywords'=>[
               'name'=>trans('keywords.name'),
               'email'=>trans('keywords.email'),
               'phone'=>trans('keywords.phone'),
               'reason'=>trans('keywords.reason'),
               'message'=>trans('keywords.message'),
           ]
        ]);
    }

    public function save(contactFormRequest $request){
        $validated = $request->validated();
        $item = contact::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }
}
