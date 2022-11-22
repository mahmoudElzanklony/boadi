<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class definisions extends Model
{
    use HasFactory;

    //protected $hidden = ['tags'];

    protected $fillable = ['term_in_arabic','term_in_english','expression'];

    public function tags(){
        return $this->belongsToMany(Tags::class,definitions_tags::class,'definition_id','tag_id');
    }
}
