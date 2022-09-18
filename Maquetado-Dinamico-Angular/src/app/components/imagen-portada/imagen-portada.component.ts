import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EdicionService } from '../edicion.service';

@Component({
  selector: 'app-imagen-portada',
  templateUrl: './imagen-portada.component.html',
  styleUrls: ['./imagen-portada.component.css']
})
export class ImagenPortadaComponent implements OnInit {
  @ViewChild ('ImagenDePortada') imagenDePortada:ElementRef

  constructor(private edicionService:EdicionService) { }

  ngOnInit(): void {
  }

  modificarPortada(param:ElementRef){
    this.edicionService.modificarCampo(param)
  }

}
