<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    public function handle(Request $request, Closure $next, $role): Response
    {
        if ($request->user()->role !== $role) {
            return response()->json([
                'success' => false,
                'message' => 'Akses ditolak. Hanya untuk ' . $role
            ], 403);
        }

        return $next($request);
    }
}
