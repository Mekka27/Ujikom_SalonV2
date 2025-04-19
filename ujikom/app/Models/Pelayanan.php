<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelayanan extends Model
{
    use HasFactory;

    protected $fillable = [
        'foto_pelayanan',
        'nama_pelayanan',
        'harga_pelayanan',
        'deskripsi_pelayanan',
    ];

    public function reservasis()
    {
        return $this->hasMany(Reservasi::class);
    }
}
