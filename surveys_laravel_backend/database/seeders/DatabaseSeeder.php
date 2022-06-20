<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin123'),
        ]);
        DB::table('users')->insert([
            'id' =>2,
            'name' => 'admin2',
            'email' => 'admin2@gmail.com',
            'password' => Hash::make('admin321'),
        ]);
    }
}
