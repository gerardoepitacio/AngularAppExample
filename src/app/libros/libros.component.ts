import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor() { }

  libros = [
    {"id": 1, "Titulo": "Titulo 1", "Autor" : "Francisco Martín Moreno", "Precio": 299, "Fecha": "Apr 04 2017"},
    {"id": 2, "Titulo": "Titulo 2", "Autor" : "Francisco Martín Moreno", "Precio": 300, "Fecha": "Nov 01 2015"},
    {"id": 3, "Titulo": "Titulo 3", "Autor" : "Francisco Martín Moreno", "Precio": 400, "Fecha": "Oct 11 2005"},
    {"id": 4, "Titulo": "Titulo 4", "Autor" : "Francisco Martín Moreno", "Precio": 500, "Fecha": "Dec 12 2017"},
    {"id": 5, "Titulo": "Titulo 5", "Autor" : "Francisco Martín Moreno", "Precio": 600, "Fecha": "Jan 01 2019"},
  ]

  ngOnInit() {

  }

}
