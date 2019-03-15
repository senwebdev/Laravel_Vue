@component('mail::message')
# Dear {{ $content->name }}

You requested your password to be reset.

Please click on the link below.

@component('mail::button', ['url' => url('/auth/reset/'. $token->token )])
Reset Password
@endcomponent

Thanks,

{{ config('app.name') }} Support Team
@endcomponent
