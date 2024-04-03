<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Theme extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var arraywe
     */
    protected $fillable = [
        'name',
        'path',
       
    ];



    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
       
    ];

    // public function user(): BelongsTo
    // {
    //     return $this->belongsTo(User::class , 'userID');
    
    // }
}
