<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Choice;

class ChoicesController extends Controller
{
    public function addChoice($choices,$question_id){
        //add a choice to the question where question_id = $question_id
        $choices = json_encode([]);
        foreach($choices as $choice){
            $new_choice = new Choice;
            $new_choice -> text = $choice;
            $new_choice -> question_id = $question_id;
            $new_choice -> save();
            $choices.append($new_choice);
        }
        return json_decode($choices);

    }

    public function getChoices($question_id){
        //get choices of question where question_id = $question_id

        return Choice::where("question_id","=",$question->id)->get();

    }
}
