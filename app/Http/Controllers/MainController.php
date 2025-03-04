<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function __invoke(){
        $numero = rand(0,9);
        $nombre = "Pablo";
        return Inertia::render('Main', compact('numero', 'nombre'));
    }
}
