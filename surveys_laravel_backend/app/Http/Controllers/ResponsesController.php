<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Response;

class ResponsesController extends Controller
{
    public function addResponse(Request $request){
        // add response with question_id = $question_id
        //and choice_id = $choice_id
        $response = new Response;
        if($request->text){
            $response -> text = $request->text;
        }
        $response -> question_id = $request->question_id;
        $response -> choice_id = $request->choice_id;
        $response->save();
        return response()->json([
            "status" => "success",
            "response" => $response
        ],200);

    }

    public function getResponses($question_id){
        //get all responses of a survey with id = $survey_id
        $responses = Response::select('choice_id')
                            ->where('question_id',"=",$question_id)
                            ->get();
        return response() -> json([
            "status" => "success",
            "responses" => $responses
        ],200);

    }
    public function getResponseCount($question_id,$choice_id){
        //count how many responses where recorded on each choice
        $responses_count = Response::where('question_id','=',$question_id)
                            ->where('choice_id','=',$choice_id)
                            ->count();
        return response()-> json([
            "status" => "success",
            "count" => $responses_count
        ],200);
    }
}
