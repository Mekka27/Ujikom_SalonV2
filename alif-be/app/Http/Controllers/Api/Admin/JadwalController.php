<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Jadwal;
use App\Models\Pelayanan;
use Illuminate\Support\Facades\Validator;

class JadwalController extends Controller
{
    // Membuat jadwal booking
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'pelayanan_id' => 'required|exists:pelayanans,id',
            'jam' => [
                'required',
                function ($attribute, $value, $fail) {
                    if (!in_array($value, Jadwal::jamTersedia())) {
                        $fail('Jam yang dipilih tidak tersedia.');
                    }
                }
            ]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Cek apakah jam sudah dipesan
        if (Jadwal::where('jam', $request->jam)->exists()) {
            return response()->json([
                'success' => false,
                'message' => 'Jam tersebut sudah dipesan.'
            ], 409);
        }

        $jadwal = Jadwal::create([
            'pelayanan_id' => $request->pelayanan_id,
            'jam' => $request->jam
        ]);

        return response()->json([
            'success' => true,
            'data' => $jadwal,
            'message' => 'Jadwal berhasil dipesan'
        ], 201);
    }

    // Mendapatkan daftar jam tersedia
    public function jamTersedia()
    {
        $allSlots = Jadwal::jamTersedia();
        
        $bookedSlots = Jadwal::pluck('jam')->toArray();

        $availableSlots = array_diff($allSlots, $bookedSlots);

        return response()->json([
            'success' => true,
            'data' => [
                'jam_tersedia' => array_values($availableSlots)
            ]
        ]);
    }
}