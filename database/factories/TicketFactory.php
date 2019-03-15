<?php

use Faker\Generator as Faker;
use App\Models\Ticket;

$factory->define(Ticket::class, function (Faker $faker) {
    return [
       'email' => $faker->email,
       'title' => $faker->word ,
       'content' => $faker->sentence,
       'slug' => $faker->slug,
       'status' => 0,
       'user_id' => 1,
    ];
});
