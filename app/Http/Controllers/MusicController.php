<?php

namespace App\Http\Controllers;

use App\Models\Music;
use Illuminate\Http\Request;




class MusicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $musicList = Music::all();
        // dd(  $musicList );
        return response()->json($musicList);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $music = Music::find($id);
        return response()->json($music);
    }

    // Add other CRUD methods as needed
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|string',
        //     'writer' => 'required|string',
        //     'img' => 'required|image|mimes:jpg,png,jpeg,gif',
        //     'src' => 'required|mimes:mp3',
           
        // ]);
dd( $request);

        // $music = new Music();
        // $music->name = $request->input('name');
        // $music->writer = $request->input('writer');
        // $music->UserID = Auth::id();
   

        // // Upload and save the image
        // if ($request->hasFile('img')) {
        //     $imgPath = $request->file('img')->store('public/images');
        //     $music->img = basename($imgPath);
        // }

        // // Upload and save the audio file
        // if ($request->hasFile('src')) {
        //     $srcPath = $request->file('src')->store('public/musics');
        //     $music->src = basename($srcPath);
        // }

        // $music->save();

        // return response()->json($music, 201);
    }
}
