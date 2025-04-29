<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Midtrans\Snap;
use Illuminate\Support\Facades\Validator;
use App\Models\Pelayanan;
use Illuminate\Support\Str;
use Midtrans\Config;
use App\Models\Pembayaran;

class PembayaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function __construct()
{
    // Setup Midtrans configuration
    Config::$serverKey = config('midtrans.server_key');
    Config::$clientKey = config('midtrans.client_key'); // Tambahkan ini
    Config::$isProduction = config('midtrans.is_production');
    Config::$isSanitized = config('midtrans.is_sanitized');
    Config::$is3ds = config('midtrans.is_3ds');
    
    // Debugging - Hapus setelah berhasil
    \Log::info('Midtrans Config:', [
        'server_key' => Config::$serverKey,
        'is_production' => Config::$isProduction
    ]);
}

public function createPayment(Request $request)
{
    $validator = Validator::make($request->all(), [
        'pelayanan_id' => 'required|exists:pelayanans,id',
        'customer_name' => 'required|string|max:255',
        'customer_email' => 'required|email|max:255',
        'customer_phone' => 'required|string|min:10|max:15'
    ], [
        'customer_email.required' => 'Email pelanggan wajib diisi',
        'customer_email.email' => 'Format email tidak valid'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    $pelayanan = Pelayanan::findOrFail($request->pelayanan_id);

    // Validasi data pelayanan dengan default value jika kosong
    $serviceName = !empty($pelayanan->nama_pelayanan) ? $pelayanan->nama_pelayanan : 'Layanan Umum';

    if (!is_numeric($pelayanan->harga) || $pelayanan->harga <= 0) {
        return response()->json([
            'success' => false,
            'message' => 'Harga pelayanan tidak valid'
        ], 400);
    }

    // Generate unique order ID
    $orderId = 'PYMNT-' . Str::uuid();

    // Siapkan item details dengan serviceName yang sudah divalidasi
    $itemDetails = [
        [
            'id' => $pelayanan->id,
            'price' => (float)$pelayanan->harga,
            'quantity' => 1,
            'name' => $serviceName, // Menggunakan serviceName yang sudah diproses
            'category' => 'Beauty Service'
        ]
    ];

    // Hitung total amount
    $grossAmount = (float)$pelayanan->harga * 1;

    // Parameter transaksi Midtrans
    $params = [
        'transaction_details' => [
            'order_id' => $orderId,
            'gross_amount' => $grossAmount,
        ],
        'item_details' => $itemDetails,
        'customer_details' => [
            'first_name' => $request->customer_name,
            'email' => $request->customer_email,
            'phone' => $request->customer_phone
        ],
        'callbacks' => [
            'finish' => env('APP_URL').'/payment-completed'
        ]
    ];

    try {
        // Debug data sebelum dikirim ke Midtrans
        \Log::info('Midtrans Request Data:', $params);

        $pembayaran = Pembayaran::create([
            'pelayanan_id' => $pelayanan->id,
            'order_id' => $orderId,
            'gross_amount' => $grossAmount,
            'transaction_status' => 'pending',
            'customer_name' => $request->customer_name,
            'customer_email' => $request->customer_email,
            'customer_phone' => $request->customer_phone,
            'service_name' => $serviceName // Menyimpan nama layanan yang digunakan
        ]);

        $snapToken = Snap::getSnapToken($params);

        return response()->json([
            'success' => true,
            'data' => [
                'snap_token' => $snapToken,
                'payment_url' => 'https://app.sandbox.midtrans.com/snap/v2/vtweb/'.$snapToken,
                'order_id' => $orderId,
                'amount' => $grossAmount,
                'service_name' => $serviceName
            ]
        ]);

    } catch (\Exception $e) {
        \Log::error('Midtrans Error:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Gagal membuat transaksi pembayaran',
            'error' => $e->getMessage()
        ], 500);
    }
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
