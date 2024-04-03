<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prompt;

class PromptController extends Controller
{
    /**
     * Display a listing of the prompts.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prompts = Prompt::all();
        return view('prompts.index', ['prompts' => $prompts]);
    }

    /**
     * Show the form for creating a new prompt.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // You can add logic for creating a new prompt form here
        return view('prompts.create');
    }

    /**
     * Store a newly created prompt in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate and store the prompt in the database
        $request->validate([
            'PromptText' => 'required',
            'DateTime' => 'required',
            'UserID' => 'required',
        ]);

        Prompt::create($request->all());

        return redirect()->route('prompts.index')->with('success', 'Prompt created successfully!');
    }

    /**
     * Display the specified prompt.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prompt = Prompt::findOrFail($id);
        return view('prompts.show', ['prompt' => $prompt]);
    }

    /**
     * Show the form for editing the specified prompt.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $prompt = Prompt::findOrFail($id);
        // You can add logic for editing a prompt form here
        return view('prompts.edit', ['prompt' => $prompt]);
    }

    /**
     * Update the specified prompt in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validate and update the prompt in the database
        $request->validate([
            'PromptText' => 'required',
            'DateTime' => 'required',
            'UserID' => 'required',
        ]);

        $prompt = Prompt::findOrFail($id);
        $prompt->update($request->all());

        return redirect()->route('prompts.index')->with('success', 'Prompt updated successfully!');
    }

    /**
     * Remove the specified prompt from the database.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $prompt = Prompt::findOrFail($id);
        $prompt->delete();

        return redirect()->route('prompts.index')->with('success', 'Prompt deleted successfully!');
    }
}
