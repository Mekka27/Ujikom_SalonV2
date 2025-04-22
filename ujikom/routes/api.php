    <?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\PelayananController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);

    // Admin-only routes
    Route::middleware('checkRole:admin')->group(function () {
        Route::get('/users', [UserController::class, 'index']);
        Route::get('/users/{id}', [UserController::class, 'show']);
        Route::post('/users', [UserController::class, 'store']);
        Route::put('/users/{id}', [UserController::class, 'update']);
        Route::delete('/users/{id}', [UserController::class, 'destroy']);

        Route::get('/pelayanan', [PelayananController::class, 'index']);
        Route::post('/pelayanan', [PelayananController::class, 'store']);
        Route::get('/pelayanan/{id}', [PelayananController::class, 'show']);
        Route::post('/pelayanan/{id}', [PelayananController::class, 'update']);
        Route::delete('/pelayanan/{id}', [PelayananController::class, 'destroy']);
    });
});
