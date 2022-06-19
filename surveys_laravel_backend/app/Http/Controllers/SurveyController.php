<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Survey;

use Auth;

class SurveyController extends Controller
{
    public function createNewSurvey(Request $request){
        // creates a new survey in db with user_id in it 
        //give it a name and a description
        $survey = new Survey;
        $survey->name = $request ->name;
        $survey->description = $request ->description;
        if($request->opening_time){
            $survey->opening_time = $request->opening_time;
        }
        if($request->closing_time){
            $survey->closing_time = $request->closing_time;
        }
        $survey->user_id = Auth::user()->id;
        $survey -> save();
        return response()->json([
            "status" => "success",
            "survey" => $survey

        ],200);
    }

    public function getSurveys($survey_id = null){
        //get all surveys
        $user_id = Auth::user()->id;
        if(!$survey_id){
            $surveys = Survey::where('user_id','=',$user_id)->get();
        }
        else{
            //get survey with id = $id
            $surveys = Survey::where('id','=',$survey_id)
                                ->where('user_id','=',$user_id)
                                ->get();
            //users can only see surveys which they made
        }
        return response()-> json([
            "status"=>"success",
            "surveys" => $surveys
        ],200);
    }
}
