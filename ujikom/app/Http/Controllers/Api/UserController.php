<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'checkRole:admin']);
    }

    public function index()
    {
        return response()->json([ 'success' => true, 'data' => User::all() ]);
    }

    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([ 'success' => false, 'message' => 'User tidak ditemukan' ], 404);
        }
        return response()->json([ 'success' => true, 'data' => $user ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'       => 'required|string|max:255',
            'email'      => 'required|string|email|max:255|unique:users',
            'password'   => 'required|string|min:8',
            'no_telepon' => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([ 'success' => false, 'errors' => $validator->errors() ], 422);
        }

        $user = User::create([
            'name'       => $request->name,
            'email'      => $request->email,
            'password'   => Hash::make($request->password),
            'role'       => 'pelanggan',
            'no_telepon' => $request->no_telepon,
        ]);

        return response()->json([ 'success' => true, 'message' => 'User berhasil ditambahkan', 'data' => $user ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([ 'success' => false, 'message' => 'User tidak ditemukan' ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name'       => 'nullable|string|max:255',
            'email'      => 'nullable|string|email|max:255|unique:users,email,' . $id,
            'password'   => 'nullable|string|min:8',
            'no_telepon' => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([ 'success' => false, 'errors' => $validator->errors() ], 422);
        }

        $user->update([
            'name'       => $request->name ?? $user->name,
            'email'      => $request->email ?? $user->email,
            'password'   => $request->password ? Hash::make($request->password) : $user->password,
            'no_telepon' => $request->no_telepon ?? $user->no_telepon,
        ]);

        return response()->json([ 'success' => true, 'message' => 'User berhasil diupdate', 'data' => $user ]);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([ 'success' => false, 'message' => 'User tidak ditemukan' ], 404);
        }

        $user->delete();
        return response()->json([ 'success' => true, 'message' => 'User berhasil dihapus' ]);
    }
}