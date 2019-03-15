<?php

namespace App\Http\GraphQL\Mutations;

use App\Mail\UserConfirmEmail;
use App\Models\User;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class ResendConfirmEmail
{
    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param array $args The arguments that were passed into the field.
     * @param GraphQLContext|null $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @throws Error messages.
     * @return mixed
     */
    public function resolve($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        // Get the user from the email.
        $user = User::where(['email' => $args['email'] ])->first();

        if(!$user) {
            throw new Error('invalid');
        }

        if($user->email_verified_at != null) {
            throw new Error('confirmed');
        }

        // Encrypt the user email.
        $encrypt = Crypt::encrypt($user->email);

        // Create an array of the user details.
        $data = [
            'name' => $user->name,
            'encrypt' => $encrypt,
            'status' => 'success',
            'message' => 'new confirm code sent.'
        ];

        // Send the user an email with the data array.
        Mail::to($user->email)->queue(new UserConfirmEmail($data));

        return $data;

    }
}
