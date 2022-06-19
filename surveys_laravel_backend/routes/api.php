<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChoicesController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SurveyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/create_survey',[SurveyController::class,'createNewSurvey'])->name('new-survey');
Route::get('/load_surveys/{id?}',[SurveyController::class,'getSurveys'])->name('get-surveys');

Route::post('/add_question',[QuestionController::class,'addNewQuestion'])->name('add-question');
Route::get('/load_questions/survey_id={survey_id}',[QuestionController::class,'getQuestions'])->name('get-question');

Route::post('/add_response',[ResponsesController::class,'addResponse'])->name('add-response');
Route::post('/get_responses/quest_id={question_id}',[ResponsesController::class,'getResponses'])->name('add-response');

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [AdminController::class, 'register']);
    Route::post('/login', [AdminController::class, 'login']);
    Route::post('/logout', [AdminController::class, 'logout']);
    Route::post('/refresh', [AdminController::class, 'refresh']);
    Route::post('/profile', [AdminController::class, 'profile']);
});