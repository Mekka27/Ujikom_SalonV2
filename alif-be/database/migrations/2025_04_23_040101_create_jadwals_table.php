<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jadwals', function (Blueprint $table) {
            $table->id();
    $table->foreignId('pelayanan_id')->constrained('pelayanans')->onDelete('cascade');
    $table->enum('jam', [
        '09:00 PM', 
        '04:45 PM', 
        '05:00 PM', 
        '05:15 PM', 
        '05:30 PM', 
        '05:45 PM', 
        '06:00 PM', 
        '08:00 PM'
    ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jadwals');
    }
};
