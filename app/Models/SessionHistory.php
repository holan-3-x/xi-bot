<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SessionHistory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'SessionID',
        'PromptID',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'SessionID' => 'integer',
        'PromptID' => 'integer',
    ];

    public function sessionID(): BelongsTo
    {
        return $this->belongsTo(Session::class);
    }

    public function promptID(): BelongsTo
    {
        return $this->belongsTo(Prompt::class);
    }
}
