<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pelayanan extends Model
{
    use HasFactory;

    protected $table = 'pelayanans'; 

    protected $fillable = [
        'category_id',
        'category_name',
        'name_pelayanan',
        'harga'
    ];

    /**
     * Relasi many-to-one ke model Category
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function jadwal(): HasMany
    {
        return $this->hasMany(Jadwal::class,);
    }

    public function catatan(): HasMany
    {
        return $this->hasMany(Catatan::class,);
    }
}