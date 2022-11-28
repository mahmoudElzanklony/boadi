<?php


namespace App\Handling_Data;


use App\Models\ads;
use App\Models\definisions;

class welcome_handling
{
    public static function handle_data(){
        return [
           'table_head'=>[
               'term_in_arabic'=>trans('keywords.search_term_in_arabic'),
               'term_in_english'=>trans('keywords.search_term_in_english'),
          //     'tags'=>trans('keywords.search_tags'),
               'expression'=>trans('keywords.search_expression'),
           ],
        ];
    }
}
