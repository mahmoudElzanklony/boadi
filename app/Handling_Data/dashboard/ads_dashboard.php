<?php


namespace App\Handling_Data\dashboard;


use App\Models\ads;

class ads_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'name'=>trans('keywords.name'),
                'link'=>trans('keywords.link'),
                'is_visible'=>trans('keywords.is_visible'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'name'=>trans('keywords.name'),
                'link'=>trans('keywords.link'),
                'is_visible'=>trans('keywords.is_visible'),
            ]
        ];
    }
}
