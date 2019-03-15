<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ForgottenPassword extends Mailable
{
    use Queueable, SerializesModels;

    protected $content;
    protected $token;

    //protected $token;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token, $content)
    {
        $this->token = $token;
        $this->content = $content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $address = env('MAIL_FROM_ADDRESS');
        $name = config('app.name');
        return $this->markdown('emails.user.forgotten')
            ->from($address, $name)
            ->subject('You have requested a password reset from '. $name)
            ->with('content', $this->content)
            ->with('token', $this->token);
    }
}
