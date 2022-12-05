import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
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
  acerca:Acerca[] = []
  agrega:BehaviorSubject<boolean> = new BehaviorSubject(true)

  obj:Acerca = {nombre_usuario:"", 
                apellido_usuario:"", imagen:"", sobre_usuario: "", ocupacion:"", img_portada: ""} 

  constructor(private authService:AuthService, private acercaService:AcercaService)
     { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)

      
    }

  ngOnInit(): void {
    this.getAcerca()
    console.log(this.acerca.length)
    
  }

  getAcerca():void {
    this.acercaService.getAcerca().
    subscribe(resp => {
      this.acerca = resp
      if (this.acerca.length > 0) {
        this.obj = this.acerca[0]
        this.agrega.next(false)
      }

      //console.log(this.obj);
    })
    
  }

  existData() {
    if (this.acerca.length != 0) {
      this.agrega.subscribe(resp => {
        console.log(resp)
      })

      console.log(this.agrega)
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
