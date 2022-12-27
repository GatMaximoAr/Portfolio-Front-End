import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { TokenService } from 'src/app/services/Auth/token.service';

@Component({
  selector: 'app-item-proyectos',
  templateUrl: './item-proyectos.component.html',
  styleUrls: ['./item-proyectos.component.css']
})
export class ItemProyectosComponent implements OnInit {
  
  isAdmin:boolean = false
  roles:string[] = []
  
  @Input('data') item:Proyecto

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities()
    this.getRol()
    //console.log(this.item)
  }

  getRol():void {
    this.roles.forEach(rol => {
      if(rol === "ROLE_ADMIN") {
        this.isAdmin = true
      }
    })
  }

}
