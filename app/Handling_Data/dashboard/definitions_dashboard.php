<?php


namespace App\Handling_Data\dashboard;


use App\Models\definisions;
use App\Models\Tags;

class definitions_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'term_in_arabic'=>trans('keywords.search_term_in_arabic'),
                'term_in_english'=>trans('keywords.search_term_in_english'),
                'tags'=>trans('keywords.search_tags'),
                'expression'=>trans('keywords.search_expression'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'term_in_arabic'=>trans('keywords.term_in_arabic'),
                'term_in_english'=>trans('keywords.term_in_english'),
           //     'tags'=>trans('keywords.tags'),
                'expression'=>trans('keywords.expression'),
            ],
            'tags'=>Tags::query()->select('id','name')->get()->map(function($e){
                return ['key'=>$e['id'],'value'=>$e['name']];
            }),
        ];
    }
}
