<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pelayanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PelayananController extends Controller
{
    // Menampilkan semua pelayanan
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Pelayanan::all()
        ]);
    }

    // Menambahkan pelayanan baru
    public function store(Request $request)
    {
        $request->validate([
            'foto_pelayanan' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'nama_pelayanan' => 'required|string',
            'harga_pelayanan' => 'required|integer',
            'deskripsi_pelayanan' => 'required|string',
        ]);

        // Ambil data dari request
        $data = $request->only(['nama_pelayanan', 'harga_pelayanan', 'deskripsi_pelayanan']);

        // Handle file foto jika ada
        if ($request->hasFile('foto_pelayanan')) {
            $foto = $request->file('foto_pelayanan')->store('foto_pelayanan', 'public');
            $data['foto_pelayanan'] = $foto;
        }

        // Simpan ke database
        $pelayanan = Pelayanan::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Pelayanan berhasil ditambahkan',
            'data' => $pelayanan
        ]);
    }

    // Menampilkan detail pelayanan berdasarkan ID
    public function show($id)
    {
        $pelayanan = Pelayanan::find($id);
        if (!$pelayanan) {
            return response()->json(['success' => false, 'message' => 'Data tidak ditemukan'], 404);
        }

        return response()->json(['success' => true, 'data' => $pelayanan]);
    }

    // Update pelayanan berdasarkan ID
    public function update(Request $request, $id)
    {
        $pelayanan = Pelayanan::findOrFail($id);
    
        $validated = $request->validate([
            'foto_pelayanan'    => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'nama_pelayanan'    => 'nullable|string',
            'harga_pelayanan'   => 'nullable|integer',
            'deskripsi_pelayanan'=> 'nullable|string',
        ]);
    
        // handle file
        if ($request->hasFile('foto_pelayanan')) {
            optional($pelayanan->foto_pelayanan, function($old){
                Storage::disk('public')->delete($old);
            });
            $validated['foto_pelayanan'] = $request->file('foto_pelayanan')
                                              ->store('foto_pelayanan','public');
        }
    
        $pelayanan->update($validated);
        $pelayanan->refresh();
    
        return response()->json([
            'success'=> true,
            'message'=> 'Pelayanan berhasil diperbarui',
            'data'   => $pelayanan,
        ]);
    }
    


    // Menghapus pelayanan berdasarkan ID
    public function destroy($id)
    {
        $pelayanan = Pelayanan::find($id);
        if (!$pelayanan) {
            return response()->json(['success' => false, 'message' => 'Data tidak ditemukan'], 404);
        }

        // Hapus foto jika ada
        if ($pelayanan->foto_pelayanan) {
            Storage::disk('public')->delete($pelayanan->foto_pelayanan);
        }

        // Hapus data pelayanan
        $pelayanan->delete();

        return response()->json(['success' => true, 'message' => 'Pelayanan berhasil dihapus']);
    }
}
