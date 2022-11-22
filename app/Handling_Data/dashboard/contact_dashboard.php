<?php


namespace App\Handling_Data\dashboard;


use App\Models\ads;

class contact_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'name'=>trans('keywords.name'),
                'email'=>trans('keywords.email'),
                'phone'=>trans('keywords.phone'),
                'reason'=>trans('keywords.reason'),
                'message'=>trans('keywords.message'),
                'actions'=>trans('keywords.actions'),
            ],
        ];
    }
}
