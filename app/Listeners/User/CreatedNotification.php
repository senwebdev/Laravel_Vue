<?php

namespace App\Listeners\User;

use App\Events\User\Created;
use App\Mail\UserConfirmEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;

class CreatedNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Created  $event
     * @return void
     */
    public function handle(Created $event)
    {
        // Encrypt the user email.
        $encrypt = Crypt::encrypt($event->user->email);

        // Create an array of the user details.
        $data = [
            'name' => $event->user->name,
            'encrypt' => $encrypt
        ];

        // Send the user an email with the data array.
        Mail::to($event->user->email)->queue(new UserConfirmEmail($data));
    }
}
