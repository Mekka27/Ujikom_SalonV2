<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $roles = [
            [
                'name' => 'admin',
                'guard_name' => 'api',
            ],
            [
                'name' => 'customer',
                'guard_name' => 'api',
            ]
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
