import { Component } from '@angular/core';
import { Punto } from '../punto';

@Component({
  selector: 'app-distancia2puntos',
  templateUrl: './distancia2puntos.component.html',
  styleUrls: ['./distancia2puntos.component.css']
})
export class Distancia2puntosComponent {

  puntoA: Punto = { x: 0, y: 0 };
  puntoB: Punto = { x: 0, y: 0 };
  distancia?:number


  calcularDistancia():void {
     this.distancia = Math.sqrt(Math.pow((this.puntoB.x - this.puntoA.x), 2) + Math.pow((this.puntoB.y - this.puntoA.y),
      2));
  }



}
