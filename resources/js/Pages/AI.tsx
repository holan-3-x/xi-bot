// AI.jsx
import React, { useState, useEffect } from 'react';
import '../../css/AI.css';
import axios from 'axios';
import { useForm } from '@inertiajs/react';
const AI = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Fetch chat history when component mounts
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/get_chat_history');
      if (response.ok) {
        const data = await response.json();
        setChatHistory(data.chatHistory);
        
        

      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { data, setData, post, processing, errors, reset,get } = useForm({
    userPrompt:"",
    AiResponse:"",
});


  const handlePromptSubmit = async () => {
    try {
      setIsLoading(true);

      // Send user input to Laravel backend

   
    
      post("/api/save_user_input");

      // // Get AI response from server
      const aiResponse = await fetch('http://127.0.0.1:5110/api/prompt_route', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: `user_prompt=${encodeURIComponent(data.userPrompt)}`,
      });

      if (aiResponse.ok) {
        const data = await aiResponse.json();
        setResponse(data);

        // Save AI response to Laravel backend
        
         setData("AiResponse", data.Answer);


        // Fetch updated chat history after saving AI response
        fetchChatHistory();
      } else {
        console.error('Error:', aiResponse.status);
      }


   




    } catch (error) {
      console.error('Error:', error);

    } finally {
      setIsLoading(false);
    }

    
  };


  useEffect(()=>{
  if (data.AiResponse != "") {
    post("/api/save_ai_response");
  }

  },[data.AiResponse])

  

  return (
    
    <div className="chat-container">
      {/* <meta name="csrf-token" content="{{ csrf_token() }}"></meta> */}
     
      <div className="chat" id='textBox'>
        {/* Display Chat History */}
        {chatHistory.reverse().map((chat, index) => (
          <div key={index} className="chat-bubble">
            <p className="chat-bubble user-bubble">{chat.user_prompt}</p>
            {chat.ai_response && <p  className="chat-bubble ai-bubble">{chat.ai_response}</p>}
          </div>
        ))}

        {/* User Input */}
        <div className="chat-bubble user-bubble">
          <p>{userPrompt}</p>
        </div>

        {/* AI Response */}
        {response && (
          <div className="chat-bubble ai-bubble">
            <p>{response.Answer}</p>
          </div>
        )}
      </div>

      {/* User Input Form */}
      <div className="user-input">
        <input
          type="text"
        
          onChange={(e) => setData("userPrompt",e.target.value)}
          disabled={isLoading}
          placeholder="Type your message..."
        />
        <button onClick={handlePromptSubmit} className='AI' disabled={isLoading}>
          Send
        </button>
      </div>
   
    </div>
  );
};

export default AI;
