<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [

        // User events and listeners.
        \App\Events\User\Created::class => [
            \App\Listeners\User\CreatedNotification::class,
            \App\Listeners\Admin\UserCreatedNotification::class,
        ],
        \App\Events\User\Updated::class => [
            \App\Listeners\Admin\UserUpdateNotification::class,
        ],
        \App\Events\User\Deleted::class => [
            \App\Listeners\Admin\UserDeletedNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
