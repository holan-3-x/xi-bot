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
        Schema::disableForeignKeyConstraints();

        Schema::create('robot_controls', function (Blueprint $table) {
            $table->id();
            $table->string('Command');
            $table->dateTime('DateTime');
            $table->foreignId('UserID')->constrained('users');
            $table->string('UserRoles');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('robot_controls');
    }
};
