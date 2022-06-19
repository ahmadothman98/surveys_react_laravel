<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Question;
use App\Models\Choice;
class CreateResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('responses', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Choice::class);
            $table->foreignIdFor(Question::class);
            $table->timestamps();
        });
        Schema::table('responses', function (Blueprint $table) {
            $table->foreign('question_id')->references('id')->on('questions');
            $table->foreign('choice_id')->references('id')->on('choices');        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('responses');
    }
}
