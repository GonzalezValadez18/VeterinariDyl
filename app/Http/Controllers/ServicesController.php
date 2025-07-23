<?php

namespace App\Http\Controllers;

//controlador de servicios

class ServicesController extends Controller
{
    public function vacunacion()
    {
        return view('modules/services/vacunacion');
    }

    public function desparasitacion()
    {
        return view('modules/services/desparasitacion');
    }

    public function estetica()
    {
        return view('modules/services/estetica');
    }

    public function consulta()
    {
        return view('modules/services/consulta');
    }
}
