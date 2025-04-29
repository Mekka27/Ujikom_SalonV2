<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = request(['email', 'password']);

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = auth()->guard('api')->user();



        return response()->json([
            'success' => true,
            'user' => [
                'username' => $user->username,
                'email' => $user->email,
            ],
            'permissions' => $user->getPermissionArray(),
            'token' => [
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth('api')->factory()->getTTL() * 60,
            ]

        ]);
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username'      => 'required',
            'email'     => 'required|email|unique:users',
            'phone_number' => 'required|unique:users',
            'password'  => 'required|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'username'         => $request->username,
            'email'        => $request->email,
            'phone_number' => $request->phone_number,
            'password'     => bcrypt($request->password),
        ]);

        if ($user) {
            $user->assignRole('customer');
            return new UserResource(true, 'Data user Berhasil Dibuat!', $user);
        }

        return new UserResource(false, 'Data User Gagal Dibuat', $user);
    }
}
