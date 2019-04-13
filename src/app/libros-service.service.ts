import { Injectable } from '@angular/core';
import { ILibro } from './_interfaces/libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LibrosServiceService {

  private librosUrl: string = './assets/json/lista-libros.json';

  constructor(private http:HttpClient) { }

  getLibros(): Observable<ILibro[]> {
    return this.http.get<ILibro[]>(this.librosUrl)
  }

}
