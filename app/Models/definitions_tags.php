<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class definitions_tags extends Model
{
    use HasFactory;

    protected $fillable = ['definition_id','tag_id'];
}
