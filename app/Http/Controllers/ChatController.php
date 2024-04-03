<?php
namespace App\Http\Controllers;

use App\Models\ChatLog;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function saveUserInput(Request $request)
    {
        $userPrompt = $request->input('userPrompt');

        // Save user input to the database
        // ChatLog::create([
        //     'user_id' => Auth::id(),
        //     'user_prompt' => $userPrompt,
        //     'ai_response' => null,
        // ]);
dd($userPrompt);
        // return response()->json(['message' => 'User input saved successfully']);
    }

    public function saveAiResponse(Request $request)
    {
        $aiResponse = $request->input('aiResponse');

        // Get the latest chat log for the user
        $latestChatLog = ChatLog::where('user_id', Auth::id())->latest()->first();

        if ($latestChatLog) {
            // Update AI response in the database
            $latestChatLog->update(['ai_response' => $aiResponse]);
        }

        return response()->json(['message' => 'AI response saved successfully']);
    }

    public function getChatHistory()
    {
        // Get chat history for the user
        $chatHistory = ChatLog::where('user_id', Auth::id())->latest()->get();

        return response()->json(['chatHistory' => $chatHistory]);
    }
}