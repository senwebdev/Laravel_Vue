<?php

namespace App\Models;

use App\Notifications\MailResetPasswordNoticfication;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Passport\HasApiTokens;
use TCG\Voyager\Models\Permission;
use TCG\Voyager\Models\Role;

class User extends \TCG\Voyager\Models\User
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    // Get the user role.
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    // Get the user permissions.
    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_role',
            'role_id', 'permission_id');
    }

    // Get the list of tickets belonging to the user.
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    // Custom send reset password email.
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MailResetPasswordNoticfication($token));
    }
}
