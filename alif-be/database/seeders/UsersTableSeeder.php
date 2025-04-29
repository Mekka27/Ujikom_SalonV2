<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            'username'      => 'admin',
            'email'     => 'admin@gmail.com',
            'password'  => bcrypt('admin123'),
        ]);

        $role = Role::where('name', 'admin')->first();
        $adminPermissions = Permission::all();

        $role->syncPermissions($adminPermissions);

        $user = User::where('email', 'admin@gmail.com')->first();
        $user->assignRole($role);

        User::create([
            'username'      => 'user1',
            'email'     => 'user@gmail.com',
            'password'  => bcrypt('user123'),
        ]);

        $role = Role::where('name', 'customer')->first();
        $adminPermissions = Permission::all();

        $role->syncPermissions($adminPermissions);

        $user = User::where('email', 'user@gmail.com')->first();
        $user->assignRole($role);
    }
}
