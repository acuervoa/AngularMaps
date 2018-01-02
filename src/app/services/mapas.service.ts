import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";

@Injectable()
export class MapasService {

    marcadores: Marcador[] = [];

    constructor() {

        let nuevoMarcador:Marcador = {
            lat: 40.49691424250059,
            lng: -3.69140088558197,
            draggable: true,
            titulo: "Mi casa"
        }

        this.marcadores.push( nuevoMarcador );
    }


    insertarMarcador(marcador:Marcador) {
        this.marcadores.push(marcador);
        this.guardarMarcadores();
    }


    guardarMarcadores() {
        localStorage.setItem('marcadores', JSON.stringify(this.marcadores ))
    }

    cargarMarcadores() {
        if (localStorage.getItem('marcadores')) {
            this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
        }else{
            this.marcadores=[];
        }
    }

    borrarMarcador( idx: number) {
        this.marcadores.splice(idx, 1);
        this.guardarMarcadores();

    }

}
