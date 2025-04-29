<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pembayaran extends Model
{
    use HasFactory;

    protected $fillable = [
        'pelayanan_id',
        'order_id',
        'gross_amount',
        'transaction_status',
        'customer_name',
        'customer_email',
        'customer_phone'
    ];

    public function pelayanan()
    {
        return $this->belongsTo(Pelayanan::class);
    }
}