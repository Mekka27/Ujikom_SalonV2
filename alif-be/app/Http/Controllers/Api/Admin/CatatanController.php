<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Catatan;

class CatatanController extends Controller
{
    // Membuat jadwal booking
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'pelayanan_id' => 'required|exists:pelayanans,id',
            'catatan'      => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }


        $jadwal = Catatan::create([
            'pelayanan_id' => $request->pelayanan_id,
            'catatan' => $request->catatan
        ]);

        return response()->json([
            'success' => true,
            'data' => $jadwal,
            'message' => 'Catatan berhasil disimpan'
        ], 201);
    }
}
