<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

use Mail;
use App\Mail\ForgottenPassword;

use Auth;
use App\Models\User;
use App\Models\Token;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'forgotten', 'reset']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password'
        ]);

        if(!$validator) {
            return response()->json(['error' => $validator->errors()], 433);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['user' => $user]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        // Validate the email and password.
        $validator = $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // If Validator fails
        if(!$validator) {
            return response()->json(['error' => 'Missing Info', 'css' => 'is-danger ', 'message' => $validator->errors()], 433);
        }

        // Credential to create token.
        $credentials = request(['email', 'password']);

        // Invalid user.
        if (! $token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized', 'css' => 'is-danger ', 'message' => 'Those credentials could not be found.'], 401);
        }

        // Get the authenticated user.
        $user = auth('api')->user();

        // Check if they have verified their email.
        if ( is_null($user->email_verified_at) ) {
            return response()->json(['error' => 'Awaiting Approval', 'css' => 'is-warning', 'message' => 'Please could you verify your email..'], 401);
        }

        // Return information with token and user details.
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        $user = auth('api')->user();

        $data = [
            'id' => $user->id,
            'name' => $user->name,
            'role' => $user->role->name
        ];
        return response()->json(['message' => 'Authenticated', 'user' => $data]);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user' => $this->guard()->user(),
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }

    public function reset(Request $request)
    {

        $validator = $this->validate($request, [
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);

        if(!$validator) {
          return response()->json(['error' => $validator->errors()], 433);
        }

        $token = $request->token;

        $userToken = Token::where(['token' => $token])->where('expire_at', '>', Carbon::now())->first();

        if(!$userToken){
          return response()->json(['error' => 'There has been an issue. Please speak to the system administrator'], 433);
        }

        $user = User::find($userToken->user_id);
        $user->password = bcrypt($request->password);
        $user->save();

        $userToken->delete();

        return response()->json(['message' => 'Your password has been reset for you.'], 200);

    }

    public function forgotten(Request $request)
    {
        $user = User::where(['email' => $request->email])->first();

        if(!$user) {
            return response()->json(['error' => 'There is an issue with that email. please check and try again.'], 403);
        }

        $token = Token::create([
          'user_id' => $user->id,
          'token' => str_random(60),
          'expire_at' => Carbon::now()->addHour()
        ]);

        Mail::to($request->email)->queue(new ForgottenPassword($token, $user));

        return response()->json(['message' => 'Your request is being processed. Please check your email.'], 200);
    }

    public function guard(){
        return \Auth::Guard('api');
    }
}
