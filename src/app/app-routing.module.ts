import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { Distancia2puntosComponent } from './distancia2puntos/distancia2puntos.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { CineComponent } from './cine/cine.component';

const routes: Routes = [
    {   path:'ResistenciasComponent', component:  ResistenciasComponent},
    {   path:'Distancia2puntosComponent', component:  Distancia2puntosComponent},
    {   path:'PizzasComponent', component:  PizzasComponent},
    {   path:'CineComponent', component:  CineComponent},
    
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}