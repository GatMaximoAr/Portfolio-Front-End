import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service'; 


@Component({
  selector: 'app-imagen-portada',
  templateUrl: './imagen-portada.component.html',
  styleUrls: ['./imagen-portada.component.css']
})
export class ImagenPortadaComponent implements OnInit, OnDestroy {
  @ViewChild ('ImagenDePortada') imagenDePortada:ElementRef

  edicion:boolean
  sub:Subscription

  constructor(
    private authService:AuthService) { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)
    }

  ngOnInit(): void {
  }



  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
