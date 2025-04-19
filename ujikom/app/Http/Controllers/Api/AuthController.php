<?php

// app/Http/Controllers/Api/AuthController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required|string|max:255',
            'email'       => 'required|string|email|max:255|unique:users',
            'password'    => 'required|string|min:8',
            'role'        => 'in:admin,pelanggan', // optional, boleh dikirim atau tidak
            'no_telepon'  => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors'  => $validator->errors(),
            ], 422);
        }

        $user = User::create([
            'name'        => $request->name,
            'email'       => $request->email,
            'password'    => Hash::make($request->password),
            'role'        => $request->role ?? 'pelanggan',
            'no_telepon'  => $request->no_telepon,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Registrasi berhasil',
            'data'    => [
                'user' => [
                    'name'        => $user->name,
                    'email'       => $user->email,
                    'role'        => $user->role,
                    'no_telepon'  => $user->no_telepon,
                ],
                'access_token' => $token,
                'token_type'   => 'Bearer',
            ]
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized: Email atau password salah'
            ], 401);
        }

        $user  = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Login berhasil',
            'data'    => [
                'user' => [
                    'name'        => $user->name,
                    'email'       => $user->email,
                    'role'        => $user->role,
                    'no_telepon'  => $user->no_telepon,
                ],
                'access_token' => $token,
                'token_type'   => 'Bearer',
            ]
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Berhasil logout dan token dihapus'
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json([ 'success' => true, 'data' => $request->user() ]);
    }
}
