<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\chatbot;
use Illuminate\Http\Request;

class ChatbotController extends Controller
{
    public function saveUserInput(Request $request)
    {
        // $userPrompt = $request->input('userPrompt');
        $data = json_decode($request->getContent());

         
        // Save user input to the database
         ChatBot::create([
            'user_id' => Auth::id(),
            'user_prompt' => $data->userPrompt,
            'ai_response' => "empty",
        ]);
 
        return response()->json(['message' => 'User input saved successfully']);
    }

    public function saveAiResponse(Request $request)
    {
        $data = json_decode($request->getContent());
        // $aiResponse = $request->input('aiResponse');



        // Get the latest chat log for the user
        $latestChatLog = ChatBot::where('user_id', Auth::id())->latest()->first();

        if ($latestChatLog) {
            // Update AI response in the database
            $latestChatLog->update(['ai_response' => $data->AiResponse]);
        }

        return response()->json(['message' => 'AI response saved successfully']);
    }

    public function getChatHistory()
    {
        // Get chat history for the user
        $chatHistory = chatbot::where('user_id', Auth::id())->latest()->get();

        return response()->json(['chatHistory' => $chatHistory]);
    }
}
