<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class contactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return User::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if(User::where('id',$id)->exists()){
            $contact=User::find($id);
            $contact->firstName = $request->firstName;
            $contact->lastName = $request->lastName;
            $contact->phoneNumber = $request->phoneNumber;
            $contact->save();
            return response()->json(["message"=>"Contact updated sucessfully","code"=>'200'],200);
        }else{
            return response()->json(["message"=>"Contact not found","code"=>'404' ],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(User::where('id',$id)->exists()){
            $contact=User::find($id);
            $contact->delete();

            return response()->json(["message"=>"Contact deleted ","code"=>'200'],200);
        }else{
            return response()->json(["message"=>"Contact not deleted ","code"=>'404'],200);
        }
    }
}
