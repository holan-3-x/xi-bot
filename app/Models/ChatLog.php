<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatLog extends Model
{
    protected $fillable = ['user_id', 'user_prompt', 'ai_response'];

    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}