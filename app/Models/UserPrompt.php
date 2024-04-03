<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserPrompt extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'PromptID',
        'PromptText',
        'DateTime',
        'UserID',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'PromptID' => 'integer',
        'DateTime' => 'datetime',
        'UserID' => 'integer',
    ];

    public function promptID(): BelongsTo
    {
        return $this->belongsTo(Prompt::class);
    }

    public function userID(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
