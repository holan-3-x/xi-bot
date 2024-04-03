<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Http\Request;


class ThemeController extends Controller

{


    public function showForm()
    {
        return view('upload');
    }

    public function upload(Request $request)
    {
  
        $request->validate([
            'name'=> 'required',
            'img' => 'required|image|mimes:jpeg,png,jpg,gif',
        ]);

        $imageName = time().'.'.$request->img->extension();
        $request->img->move(public_path('images'), $imageName);

        $image = new Theme;
        $image->name = $request['name'];
        $image->path = 'images/'.$imageName;
        // $image->userID=1;
        $image->save();

        return redirect("/dashboard");
    }

    public function showImages()
    {
        $images = Theme::all();
        return view('show', compact('images'));
    }

    public function fetchData()
    {
        $data = Theme::all(); // Assuming YourModel is the model corresponding to your database table

        return response()->json($data);
    }
    public function deleteTheme($id)
    {
        $theme = Theme::find($id);

        if (!$theme) {
            return response()->json(['message' => 'Theme not found'], 404);
        }

        // Remove the image from the public directory
        File::delete(public_path($theme->path));

        // Delete the theme record from the database
        $theme->delete();

        return response()->json(['message' => 'Theme deleted successfully']);
    }
}
