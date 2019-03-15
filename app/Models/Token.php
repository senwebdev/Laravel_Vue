<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    protected $fillable = [
      'user_id',
      'token',
      'expire_at',

    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }
}
