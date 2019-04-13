import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './_interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class DevuelveUsuariosServiceService {
  
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl)
  }

}
