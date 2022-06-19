<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Question;

use App\Http\Controllers\ChoicesController;

class QuestionController extends Controller
{
    public function addNewQuestion(Request $request){
        //create new question with text, type, and survey id
        
        $question = new Question;
        $question -> text = $request -> text;
        $question -> type = $request -> type;
        $question -> survey_id = $request -> survey_id;
        $question -> save();
        $choices_controller = new ChoicesController;
        $choices = $choices_controller->addChoice($request -> choices,$question->id);
        return response()->json([
            "status" => "success",
            "question" => $question,
            "choices" => $choices
        ],200);
    }
    public function getQuestions($survey_id){

        //get all questions with survey_id = $survey_id
        $questions = Question::where("survey_id","=",$survey_id)->get();

        //get all choices of the question
        foreach($questions as $question){
            $choices_controller = new ChoicesController;
            $choices =$choices_controller -> getChoices($question->id); 
            $question -> choices = $choices;
        }
        
        return response() -> json([
            "status" => "success",
            "questions" => $questions
        ],200);
    }
}
