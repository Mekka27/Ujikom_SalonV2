<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Catatan extends Model
{
    use HasFactory;

    protected $fillable = [
        'pelayanan_id',
        'catatan',
    ];

    // Relasi ke pelayanan
    public function pelayanan(): BelongsTo
    {
        return $this->belongsTo(Pelayanan::class);
    }
}