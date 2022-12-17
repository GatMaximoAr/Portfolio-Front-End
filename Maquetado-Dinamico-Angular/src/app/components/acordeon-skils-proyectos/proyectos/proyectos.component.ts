import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { TokenService } from 'src/app/services/Auth/token.service';
import { ProyectoServiceService } from 'src/app/services/Proyecto/proyecto-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = []
  isAdmin: boolean = false
  roles:string[]

  constructor(private proyectoService:ProyectoServiceService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.getProyectos();
    this.roles = this.tokenService.getAuthorities()
    this.getRoles()
  }

   getProyectos():void {
    this.proyectoService.getProyectos()
    .subscribe(resp => {
      this.proyectos = resp;
      console.log(resp);
    }) }

    getRoles():void {
      this.roles.forEach(rol => {
        if(rol === "ROLE_ADMIN") {
          this.isAdmin = true
        }
      })
    }

}
