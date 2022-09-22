import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { EdicionService } from '../edicion.service';

@Component({
  selector: 'app-imagen-portada',
  templateUrl: './imagen-portada.component.html',
  styleUrls: ['./imagen-portada.component.css']
})
export class ImagenPortadaComponent implements OnInit, OnDestroy {
  @ViewChild ('ImagenDePortada') imagenDePortada:ElementRef

  edicion:boolean
  sub:Subscription

  constructor(private edicionService:EdicionService,
    private authService:AuthService) { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)
    }

  ngOnInit(): void {
  }

  modificarPortada(param:ElementRef){
    this.edicionService.modificarCampo(param)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
