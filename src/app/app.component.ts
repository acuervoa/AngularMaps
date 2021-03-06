import { Component } from '@angular/core';
import { MapasService } from "./services/mapas.service";
import { Marcador } from "./interfaces/marcador.interface";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    lat: number = 40.49691424250059;
    lng: number = -3.69140088558197;
    zoom: number = 18;

    marcadorSel:any = null;
    draggable:string = "1";

    constructor(public _ms: MapasService) {
        _ms.cargarMarcadores();
    }

    clickMapa(evento) {

        let nuevoMarcador: Marcador = {
            lat: evento.coords.lat,
            lng: evento.coords.lng,
            titulo: "Sin titulo",
            draggable: true
        }

        this._ms.insertarMarcador(nuevoMarcador);
    }

    clickMarcador(marcador:Marcador, i:number){
        console.log(marcador, i);
        this.marcadorSel = marcador;

        if(this.marcadorSel.draggable){
            this.draggable = "1"
        }else {
                this.draggable = "0"
        }

    }

    cambiarDraggable(){
        if(this.draggable == "1"){
            this.marcadorSel.draggable = true;
        } else {
            this.marcadorSel.draggable = false;
        }
    }

    dragEndMarcador(marcador:Marcador, evento ){
        console.log(marcador, evento );
        let lat = evento.coords.lat;
        let lng = evento.coords.lng;

        marcador.lat = lat;
        marcador.lng = lng;

        this._ms.guardarMarcadores();
    }



}
