<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Jadwal extends Model
{
    use HasFactory;

    protected $fillable = [
        'pelayanan_id',
        'jam',
    ];

    // Relasi ke pelayanan
    public function pelayanan(): BelongsTo
    {
        return $this->belongsTo(Pelayanan::class);
    }

    // Daftar jam yang tersedia
    public static function jamTersedia(): array
    {
        return [
            '09:00 PM', 
            '04:45 PM', 
            '05:00 PM', 
            '05:15 PM', 
            '05:30 PM', 
            '05:45 PM', 
            '06:00 PM', 
            '08:00 PM'
        ];
    }
}