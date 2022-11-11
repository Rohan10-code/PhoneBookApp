<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\contactController;
use App\Http\Resources\contactResource;

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

Route::get('/contact/{id}',function($id){
    return new contactResource(User::findOrFail($id));
});

Route::get('/contact',function(){
    return contactResource::collection(User::all());
});

Route::put('/contact/{id}',[contactController::class,'update']);

Route::delete('/contact/{id}',[contactController::class,'destroy']);

Route::post('/contact',[contactController::class,'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
