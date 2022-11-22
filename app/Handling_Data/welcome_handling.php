<?php


namespace App\Handling_Data;


use App\Models\ads;
use App\Models\definisions;

class welcome_handling
{
    public static function handle_data(){
        return [
           'table_head'=>[
               'term_in_arabic'=>trans('keywords.term_in_arabic'),
               'term_in_english'=>trans('keywords.term_in_english'),
          //     'tags'=>trans('keywords.tags'),
               'expression'=>trans('keywords.expression'),
           ],
           'ads'=>ads::query()->where('is_visible','=',1)->get(),
           'data'=>definisions::query()->orderBy('id','DESC')->get()
        ];
    }
}
