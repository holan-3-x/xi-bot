<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Prompt;
use App\Models\User;

class PromptFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Prompt::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'PromptText' => $this->faker->text(),
            'DateTime' => $this->faker->dateTime(),
            'UserID' => User::factory(),
        ];
    }
}
