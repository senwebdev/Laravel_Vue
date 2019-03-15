<?php

namespace App\Http\GraphQL\Queries;

use App\Http\GraphQL\Errors\User\ConfirmEmailException;
use App\Models\User;
use Carbon\Carbon;
use GraphQL\Error\Error;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Crypt;
use mysql_xdevapi\Exception;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class ConfirmUserEmail
{
    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param array $args The arguments that were passed into the field.
     * @param GraphQLContext|null $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @throws ConfirmEmailException Exception.
     * @throws Error Exception.
     * @return mixed
     */
    public function resolve($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        try {
            // Get the email from the url token.
            $token = Crypt::decrypt($args['token']);

            //Use the token to search for the user.
            $user = User::where(['email' => $token])->whereNull('email_verified_at')->first();

            if(!$user) {

              // Return if the user has already confirmed their email.
              throw new Error("confirmed");

            }

            // Update the user's email_verified_at.
            $user->email_verified_at = Carbon::now();
            $user->save();

            // Return user.
            return $user;

        } catch(\RuntimeException $e) {
            // Return if the token is invalid.
            throw new Error("invalid");
        }

    }
}
