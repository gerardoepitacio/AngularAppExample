import { Component, OnInit } from '@angular/core';
import { LibrosServiceService } from '../libros-service.service';
import { ILibro } from '../_interfaces/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})

export class LibrosComponent implements OnInit {

  libros: ILibro[]

  constructor(private bookService: LibrosServiceService) {}

  ngOnInit() {

    //this.libros = this.bookService.getLibros();
    this.bookService.getLibros().subscribe(
      libros => this.libros = libros
    )

  }

}
