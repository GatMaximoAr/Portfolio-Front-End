import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { EdicionService } from '../edicion.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit, OnDestroy {
  @ViewChild ('AcercaDe') acercade:ElementRef

  edicion:boolean
  sub:Subscription

  constructor(private edicionService:EdicionService,
    private authService:AuthService) { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)
    }

  ngOnInit(): void {
  }

  modificarCampo(param:ElementRef){
    this.edicionService.modificarCampo(param)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
