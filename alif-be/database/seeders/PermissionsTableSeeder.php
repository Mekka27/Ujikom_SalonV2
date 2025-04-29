<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Permission::create(['name' => 'get-user', 'guard_name' => 'api']);
        Permission::create(['name' => 'create-user', 'guard_name' => 'api']);
        Permission::create(['name' => 'update-user', 'guard_name' => 'api']);
        Permission::create(['name' => 'delete-user', 'guard_name' => 'api']);

        Permission::create(['name' => 'get-reservasi', 'guard_name' => 'api']);
        Permission::create(['name' => 'create-reservasi', 'guard_name' => 'api']);
        Permission::create(['name' => 'update-reservasi', 'guard_name' => 'api']);
        Permission::create(['name' => 'delete-reservasi', 'guard_name' => 'api']);

        Permission::create(['name' => 'get-pelayanan', 'guard_name' => 'api']);
        Permission::create(['name' => 'create-pelayanan', 'guard_name' => 'api']);
        Permission::create(['name' => 'update-pelayanan', 'guard_name' => 'api']);
        Permission::create(['name' => 'delete-pelayanan', 'guard_name' => 'api']);

        Permission::create(['name' => 'get-jadwal', 'guard_name' => 'api']);
        Permission::create(['name' => 'create-jadwal', 'guard_name' => 'api']);
        Permission::create(['name' => 'update-jadwal', 'guard_name' => 'api']);
        Permission::create(['name' => 'delete-jadwal', 'guard_name' => 'api']);

        Permission::create(['name' => 'checkout', 'guard_name' => 'api']);


        Permission::create(['name' => 'get-riwayat', 'guard_name' => 'api']);
        Permission::create(['name' => 'delete-riwayat', 'guard_name' => 'api']);
    }
}
