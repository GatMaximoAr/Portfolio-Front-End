import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Acerca } from 'src/app/models/Acerca';
import { AcercaService } from '../../services/Acerca-de/acerca.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit, OnDestroy {
  @ViewChild ('AcercaDe') acercade:ElementRef

  edicion:boolean
  sub:Subscription
  acerca:Acerca[]

  obj:Acerca = {nombre_usuario:"", 
                apellido_usuario:"", imagen:"", sobre_usuario: "", ocupacion:""} 

  constructor(private authService:AuthService, private acercaService:AcercaService)
     { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)

      this.getAcerca()
    }

  ngOnInit(): void {
    
  }

  getAcerca():void {
    this.acercaService.getAcerca().
    subscribe(resp => {
      this.obj = resp

      

      //console.log(this.obj);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
