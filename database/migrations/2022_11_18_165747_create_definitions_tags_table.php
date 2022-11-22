<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDefinitionsTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('definitions_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('definition_id')->constrained('definisions')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('tag_id')->constrained('Tags')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('definitions_tags');
    }
}
