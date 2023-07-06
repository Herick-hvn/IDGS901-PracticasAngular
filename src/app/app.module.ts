import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { Distancia2puntosModule } from './distancia2puntos/distancia2puntos.module';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { FormsModule } from '@angular/forms';
import { PizzasModule } from './pizzas/pizzas.module';
import { PruebasComponent } from './pruebas/pruebas.component';
import { CineModule } from './cine/cine.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ResistenciasComponent,
    PruebasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Distancia2puntosModule,
    FormsModule,
    BrowserAnimationsModule,
    PizzasModule,
    AppRoutingModule, 
    CineModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
