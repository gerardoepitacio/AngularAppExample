import { RouterModule, Routes } from "@angular/router"

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatCheckboxModule } from '@angular/material'

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes = [
  { path: "inicio", component: InicioComponent }, 
  { path: "libros", component: LibrosComponent }, 
  { path: "users", component: UsuariosComponent },
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
    DetalleLibroComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
