<?php

// namespace App\Http\Controllers\Api\Admin;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use App\Models\Pembayaran;
// use App\Models\Pelayanan;
// use Midtrans\Config;
// use Midtrans\Snap;
// use Illuminate\Support\Str;
// use Illuminate\Support\Facades\Validator;

// class MidtransController extends Controller
// {
//     public function __construct()
//     {
//         // Setup Midtrans
//         Config::$serverKey = config('midtrans.server_key');
//         Config::$isProduction = config('midtrans.is_production');
//         Config::$isSanitized = config('midtrans.is_sanitized');
//         Config::$is3ds = config('midtrans.is_3ds');
//     }


//     public function createPayment(Request $request)
//     {
//         $validator = Validator::make($request->all(), [
//             'pelayanan_id' => 'required|exists:pelayanans,id',
//             'customer_name' => 'required|string',
//         ]);

//         if ($validator->fails()) {
//             return response()->json([
//                 'success' => false,
//                 'errors' => $validator->errors()
//             ], 422);
//         }

//         $pelayanan = Pelayanan::findOrFail($request->pelayanan_id);

//         // Generate unique order ID
//         $orderId = 'PYMNT-' . Str::uuid();

//         // Parameter transaksi Midtrans
//         $params = [
//             'transaction_details' => [
//                 'order_id' => $orderId,
//                 'gross_amount' => $pelayanan->harga,
//             ],
//             'item_details' => [
//                 [
//                     'id' => $pelayanan->id,
//                     'price' => $pelayanan->harga,
//                     'quantity' => 1,
//                     'name' => $pelayanan->nama_pelayanan,
//                     'category' => 'Beauty Service'
//                 ]
//             ],
//             'customer_details' => [
//                 'first_name' => $request->category_name,
//             ],
//             'callbacks' => [
//                 'finish' => env('APP_URL').'/payment-completed' // URL setelah pembayaran selesai
//             ]
//         ];

//         try {
//             // Create payment record
//             $pembayaran = Pelayanan::create([
//                 'pelayanan_id' => $pelayanan->id,
//                 'order_id' => $orderId,
//                 'gross_amount' => $pelayanan->harga,
//                 'transaction_status' => 'pending',
//                 'category_name' => $request->category_name,
//             ]);

//             // Dapatkan Snap Token
//             $snapToken = Snap::getSnapToken($params);

//             return response()->json([
//                 'success' => true,
//                 'data' => [
//                     'snap_token' => $snapToken,
//                     'payment_url' => 'https://app.sandbox.midtrans.com/snap/v2/vtweb/'.$snapToken,
//                     'order_id' => $orderId,
//                     'amount' => $pelayanan->harga,
//                     'service_name' => $pelayanan->nama_pelayanan
//                 ]
//             ]);

//         } catch (\Exception $e) {
//             return response()->json([
//                 'success' => false,
//                 'message' => 'Gagal membuat transaksi pembayaran',
//                 'error' => $e->getMessage()
//             ], 500);
//         }
//     }

//     /**
//      * Handle notification dari Midtrans
//      */
//     public function handleNotification(Request $request)
//     {
//         $payload = $request->all();

//         // Verifikasi signature key
//         $signatureKey = hash('sha512', 
//             $payload['order_id'] . 
//             $payload['status_code'] . 
//             $payload['gross_amount'] . 
//             config('midtrans.server_key')
//         );

//         if ($signatureKey != $payload['signature_key']) {
//             return response()->json(['message' => 'Signature tidak valid'], 403);
//         }

//         // Temukan pembayaran
//         $pembayaran = Pelayanan::where('order_id', $payload['order_id'])->firstOrFail();

//         // Update status pembayaran
//         $pembayaran->update([
//             'transaction_status' => $payload['transaction_status'],
//             'payment_type' => $payload['payment_type'] ?? null,
//             'fraud_status' => $payload['fraud_status'] ?? null,
//             'notification_payload' => json_encode($payload)
//         ]);

//         return response()->json(['message' => 'Notifikasi berhasil diproses']);
//     }

//     /**
//      * Cek status pembayaran
//      */
//     public function checkStatus($orderId)
//     {
//         $pembayaran = Pelayanan::where('order_id', $orderId)->firstOrFail();

//         return response()->json([
//             'success' => true,
//             'data' => [
//                 'order_id' => $pembayaran->order_id,
//                 'status' => $pembayaran->transaction_status,
//                 'service' => $pembayaran->pelayanan->nama_pelayanan,
//                 'amount' => $pembayaran->gross_amount,
//                 'payment_date' => $pembayaran->updated_at
//             ]
//         ]);
//     }
// }