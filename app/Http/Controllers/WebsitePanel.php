<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Beasiswa;
use App\Models\Instansi;
use Illuminate\Http\Request;

class WebsitePanel extends Controller
{
    public function ShowListBeasiswa(Request $request) {
        $Relation = ['Instansi'];
        $Highlight = Beasiswa::latest()->take(5)->get();
        $Beasiswa = Beasiswa::all();
        $BestInstansi = Instansi::withCount('Beasiswa')->orderBy('beasiswa_count', 'desc')->take(5)->get();
        if ($request->Filter == 'Nama Beasiswa') {
            $Beasiswa = Beasiswa::where('nama_beasiswa', 'like', '%'.$request->search.'%')->get();
        } else if ($request->Filter == 'Instansi Beasiswa') {
            $Beasiswa = Beasiswa::whereHas('instansi', function ($query) use ($request) {
                $query->where('nama_instansi', 'like', '%' . $request->search . '%');
            })->get();
        } else if ($request->Filter == 'Link Beasiswa') {
            $Beasiswa = Beasiswa::where('link_pendaftaran', 'like', '%'.$request->search.'%')->get();
        }
        $Highlight->load($Relation);
        $Beasiswa->load($Relation);
        return view('Website.Beasiswa.IndexData', [
            'HighlightBeasiswa' => $Highlight,
            'Beasiswa' => $Beasiswa,
            'BestInstansi' => $BestInstansi,
        ]);
    }
}
