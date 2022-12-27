import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Acerca } from 'src/app/models/Acerca';
import { AcercaService } from '../../services/Acerca-de/acerca.service';
import { TokenService } from 'src/app/services/Auth/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit, OnDestroy {
  //@ViewChild ('AcercaDe') acercade:ElementRef

  sub:Subscription
  
  agrega:BehaviorSubject<boolean> = new BehaviorSubject(true)
  isAdmin:boolean = false
  roles:string[] = []

  obj:Acerca = {nombre_usuario:"", 
                apellido_usuario:"", imagen:"", sobre_usuario: "", ocupacion:"", img_portada: ""} 

  constructor(private acercaService:AcercaService,
    private tokenService:TokenService)
     { }

  ngOnInit(): void {
    this.getAcerca()
    //console.log(this.acerca.length)
    this.roles = this.tokenService.getAuthorities()
    this.getRol()
    
  }

  getAcerca():void {
    this.acercaService.getAcerca().
    subscribe(resp => {
      this.obj = resp
      console.log(resp)
      this.agrega.next(false)
    }, err =>{
    })
    
  }


  getRol():void {
    this.roles.forEach(rol => {
      if(rol === "ROLE_ADMIN") {
        this.isAdmin = true
      }
    })
  }

  ngOnDestroy(): void {
  }

}
