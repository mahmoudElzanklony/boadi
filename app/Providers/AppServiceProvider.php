<?php

namespace App\Providers;

use App\Models\favourites;
use App\Models\notifications;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        Inertia::share('user', function () {
            if (Auth::user()) {
                return auth()->user();
            }
        });
        Inertia::share('lang', function () {
            if(!(session()->has('lang'))){
                 session()->put('lang','ar');
            }
            return session()->get('lang');

        });


        Inertia::share('sessions_data', function () {

            return session()->get('message');
        });

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
    }
}
