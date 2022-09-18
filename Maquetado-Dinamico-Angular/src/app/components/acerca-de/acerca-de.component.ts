import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EdicionService } from '../edicion.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {


  @ViewChild ('AcercaDe') acercade:ElementRef

  constructor(private edicionService:EdicionService) { }

  ngOnInit(): void {
  }

  modificarCampo(param:ElementRef){
    this.edicionService.modificarCampo(param)
  }

}
