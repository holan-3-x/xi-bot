<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\RobotControl;
use App\Models\User;

class RobotControlFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RobotControl::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'Command' => $this->faker->word(),
            'DateTime' => $this->faker->dateTime(),
            'UserID' => User::factory(),
            'UserRoles' => $this->faker->word(),
        ];
    }
}
