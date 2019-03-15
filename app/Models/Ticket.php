<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'email',
        'title',
        'content',
        'slug',
        'status'
    ];

    public function user() {
        return $this->belongsTo(User::class)->withDefault();
    }
}
