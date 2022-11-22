<?php


namespace App\Handling_Data\dashboard;


use App\Models\quotation_orders;

class quotations_dashboard
{
    public static function handle_data(){

        return [
            'data'=>quotation_orders::query()->with(['user:id,username'])->get(),
            'table_head_keys'=>[
                'username'=>trans('keywords.username'),
                'details'=>trans('keywords.show_details'),
                'is_completed'=>trans('keywords.is_completed_status'),
                'date'=>trans('keywords.date'),
                'actions'=>trans('keywords.actions'),
            ],
            'table_head_keys_model'=>[
                'brand'=>trans('keywords.brand'),
                'part_number'=>trans('keywords.part_no'),
                'quantity'=>trans('keywords.quantity'),
                'serial'=>trans('keywords.serial'),
                'actions'=>trans('keywords.actions'),
            ],
        ];
    }
}
