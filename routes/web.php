<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ThemeController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\MusicController;

Route::get('/music', [MusicController::class, 'index']);
Route::get('/music/{id}', [MusicController::class, 'show']);
Route::post('/music', [MusicController::class, 'store']);

Route::middleware("admin")->group(function (){

    Route::get("/admins/theme",function (){

        return Inertia::render("admin/indextheme");

    });
    Route::get("/admins/music",function (){

        return Inertia::render("admin/Musiccopy");

    });

});


Route::post('/api/save_user_input', [ChatbotController::class, 'saveUserInput']);
Route::post('/api/save_ai_response', [ChatbotController::class, 'saveAiResponse']);
Route::get('/api/get_chat_history', [ChatbotController::class, 'getChatHistory']);


Route::get('/tests', function () {
    return Inertia::render('Musiccopy');
});

// Route::post('/themes/store', [ThemeController::class, 'store']);
Route::get('/image/upload', [ThemeController::class, 'showForm'])->name('image.showForm');
Route::post('/image/upload', [ThemeController::class, 'upload']);
Route::get('/image/show', [ThemeController::class, 'showImages'])->name('image.showImages');
Route::get('/fetch-data', [ThemeController::class, 'fetchData']);


Route::get('/dashboard', function () {
    return Inertia::render('DashboardX');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function () {
    return Inertia::render('Welcomecopy', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('DashboardX');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
