<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pelayanan;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class PelayananController extends Controller
{
    /**
     * Menampilkan daftar semua layanan atau layanan berdasarkan kategori
     */
    public function index(Request $request)
    {
        // Jika ada parameter category_id, filter berdasarkan kategori
        if ($request->has('category_id')) {
            $pelayanans = Pelayanan::where('category_id', $request->category_id)
                ->orderBy('nama_pelayanan', 'asc')
                ->get();
        } else {
            // Jika tidak, tampilkan semua layanan
            $pelayanans = Pelayanan::orderBy('nama_pelayanan', 'asc')->get();
        }

        return response()->json([
            'success' => true,
            'data' => $pelayanans
        ]);
    }

    /**
     * Menyimpan layanan baru
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_name' => 'required|exists:categories,name',
            'name_pelayanan' => 'required|string|max:255',
            'harga' => 'required|numeric|min:0',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }
    
        // Cari kategori
        $category = Category::where('name', $request->category_name)->firstOrFail();
    
        // Bersihkan format harga
        $harga = (float)preg_replace('/[^0-9.]/', '', $request->harga);
    
        $pelayanan = Pelayanan::create([
            'category_id' => $category->id,
            'category_name' => $category->name,
            'name_pelayanan' => $request->name_pelayanan,
            'harga' => $harga,
        ]);
    
        return response()->json([
            'success' => true,
            'data' => $pelayanan,
            'message' => 'Layanan berhasil ditambahkan'
        ], 201);
    }

    /**
     * Menampilkan detail layanan
     */
    public function show(string $id)
    {
        $pelayanan = Pelayanan::find($id);

        if (!$pelayanan) {
            return response()->json([
                'success' => false,
                'message' => 'Layanan tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $pelayanan
        ]);
    }

    /**
     * Mengupdate layanan
     */
    public function update(Request $request, string $id)
    {
        $pelayanan = Pelayanan::find($id);

        if (!$pelayanan) {
            return response()->json([
                'success' => false,
                'message' => 'Layanan tidak ditemukan'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'foto_pelayanan' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'nama_pelayanan' => 'required|string|max:255',
            'deskripsi_pelayanan' => 'required|string',
            'harga' => 'required|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $pelayanan->update([
            'foto_pelayanan' => $request->foto_pelayanan,
            'category_id' => $request->category_id,
            'nama_pelayanan' => $request->nama_pelayanan,
            'deskripsi_pelayanan' => $request->deskripsi_pelayanan,
            'harga' => $request->harga,
        ]);

        return response()->json([
            'success' => true,
            'data' => $pelayanan,
            'message' => 'Layanan berhasil diperbarui'
        ]);
    }

    /**
     * Menghapus layanan
     */
    public function destroy(string $id)
    {
        $pelayanan = Pelayanan::find($id);

        if (!$pelayanan) {
            return response()->json([
                'success' => false,
                'message' => 'Layanan tidak ditemukan'
            ], 404);
        }

        $pelayanan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Layanan berhasil dihapus'
        ]);
    }

    /**
     * Menampilkan semua kategori beserta layanannya
     */
    public function kategoriDenganLayanan()
    {
        $categories = Category::with('pelayanans')->get();

        return response()->json([
            'success' => true,
            'data' => $categories
        ]);
    }
}