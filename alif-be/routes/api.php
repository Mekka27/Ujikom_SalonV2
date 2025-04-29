<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Auth\AuthController;

Route::middleware('api')->group(function () {
    Route::post('/login', [App\Http\Controllers\Api\Auth\AuthController::class, 'login']);
    Route::post('/register', [App\Http\Controllers\Api\Auth\AuthController::class, 'register']);
    Route::delete('/logout', [App\Http\Controllers\Api\Auth\AuthController::class, 'logout']);

    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'index']);

        // category
        Route::post('/categori', [App\Http\Controllers\Api\Admin\CategoryController::class, 'store']);

        // layanan
        Route::post('/layanan', [App\Http\Controllers\Api\Admin\PelayananController::class, 'store']);

        // jadwal
        Route::post('/jadwal', [App\Http\Controllers\Api\Admin\JadwalController::class, 'store']);

        // catatan
        Route::post('/catatan', [App\Http\Controllers\Api\Admin\CatatanController::class, 'store']);

        //  midtrans
        Route::post('/pembayaran', [App\Http\Controllers\Api\Admin\PembayaranController::class, 'createPayment']);

        // handle notifikasi dari midtrans
        // Route::post('/notification', [App\Http\Controllers\Api\Admin\MidtransController::class, 'handleNotification']);
    
        // cek status pembayaran midtrans
        // Route::get('/status/{orderId}', [App\Http\Controllers\Api\Admin\MidtransController::class, 'checkStatus']);
    });
});
