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

        Schema::create('user_prompts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('PromptID')->constrained('prompts');
            $table->text('PromptText');
            $table->dateTime('DateTime');
            $table->foreignId('UserID')->constrained('users');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_prompts');
    }
};
