import { RouterModule, Routes } from "@angular/router"

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent }, 
  { path: "libros", component: LibrosComponent }, 
  { path: "detalle/:id", component: DetalleLibroComponent }, 
  { path: "404", component: NotFoundComponent }, 
  { path: "", component: InicioComponent, pathMatch: 'full' }, 
  { path: "**", redirectTo: '404' }, 
]

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    InicioComponent,
    NotFoundComponent,
    DetalleLibroComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
