<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Document;
use App\Models\Summary;

class SummaryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Summary::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'SummaryText' => $this->faker->text(),
            'DateTime' => $this->faker->dateTime(),
            'DocumentID' => Document::factory(),
        ];
    }
}
