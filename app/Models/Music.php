<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'music';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'writer', 'img', 'src', 'UserID', 'DateTime',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'DateTime' => 'datetime',
    ];

    /**
     * Get the user that owns the music.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'UserID');
    }
}