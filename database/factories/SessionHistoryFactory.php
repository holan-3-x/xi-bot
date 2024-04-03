<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Prompt;
use App\Models\Session;
use App\Models\SessionHistory;

class SessionHistoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SessionHistory::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'SessionID' => Session::factory(),
            'PromptID' => Prompt::factory(),
        ];
    }
}
