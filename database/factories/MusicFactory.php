<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Music;
use App\Models\User;

class MusicFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Music::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'Title' => $this->faker->word(),
            'Artist' => $this->faker->word(),
            'Genre' => $this->faker->word(),
            'FilePath' => $this->faker->word(),
            'UserID' => User::factory(),
            'DateTime' => $this->faker->dateTime(),
        ];
    }
}
