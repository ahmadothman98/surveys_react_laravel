<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Choice;

class ChoicesController extends Controller
{
    public function addChoice($string_choices,$question_id){
        //add a choice to the question where question_id = $question_id

        $returned_choices = [];

        //transform string gotten from request into iteratabel array
        $choices = json_decode($string_choices); 

        foreach($choices as $choice){
            $new_choice = new Choice;
            $new_choice -> text = $choice;
            $new_choice -> question_id = $question_id;
            $new_choice -> save();
            array_push($returned_choices,$new_choice);
        }
        return $returned_choices;

    }

    public function getChoices($question_id){
        //get choices of question where question_id = $question_id

        return Choice::where("question_id","=",$question_id)->get();

    }
}
