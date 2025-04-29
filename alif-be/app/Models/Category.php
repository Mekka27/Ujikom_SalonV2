<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories'; 

    protected $fillable = [
        'name',
        'description',
        'image',
    ];

    /**
     * Relasi one-to-many ke model Pelayanan
     * Satu kategori memiliki banyak pelayanan
     */
    public function pelayanans(): HasMany
    {
        return $this->hasMany(Pelayanan::class, 'category_id');
    }
}