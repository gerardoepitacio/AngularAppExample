import { Component, OnInit } from '@angular/core';
import { DevuelveUsuariosServiceService } from '../devuelve-usuarios-service.service';
import { IUser } from '../_interfaces/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: IUser[]

  constructor(private userService: DevuelveUsuariosServiceService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.usuarios = users
    )
  }

}
