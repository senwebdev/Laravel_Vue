@component('mail::message')
# Dear {{ $content->name }}

Please click the button below to validate your email.

@component('mail::button', ['url' => url('/validate/member/'. $content->authentication_code )])
Validate My Email
@endcomponent

Thanks,<br>
{{ config('app.name') }} Support Team
@endcomponent
