<?php


namespace App\Services;


use App\Models\definisions;
use Illuminate\Support\Facades\DB;

class Info_Expressions
{
    public static function get_data(){
        if(request('table') == 'definisions_dash'){
            return definisions::query()->with('tags')
                ->orderBy('id', 'DESC')
                ->when(request()->has('searches') && sizeof(request('searches')) > 0, function ($e) {
                    foreach (request('searches') as $key => $value) {
                        if ($key == 'is_visible' && $value != '') {
                            if (str_contains($value, 'ن')) {
                                $e->where($key, 'LIKE', 1);
                            } else {
                                $e->where($key, 'LIKE', 0);
                            }
                        } else if ($key == 'tags' && $value != '') {
                            $e->whereHas('tags',function($q) use ($value){
                                $q->where('name','LIKE','%'.$value.'%');
                            });
                        }else if ($key != 'tags' && $value != '') {
                            $e->where($key, 'LIKE', $value . '%');
                        }
                    }
                })
                ->paginate(request('length'));
        }else {
            return DB::table(request('table'))
                ->orderBy('id', 'DESC')
                ->when(request()->has('searches') && sizeof(request('searches')) > 0, function ($e) {
                    foreach (request('searches') as $key => $value) {
                        if ($key == 'is_visible' && $value != '') {
                            if (str_contains($value, 'ن')) {
                                $e->where($key, 'LIKE', 1);
                            } else {
                                $e->where($key, 'LIKE', 0);
                            }
                        } else if ($key != 'tags' && $value != '') {
                            $e->where($key, 'LIKE', $value . '%');
                        }
                    }
                })
                ->paginate(request('length'));
        }
    }
}
