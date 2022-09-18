import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { EdicionService } from '../edicion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  mostrar:boolean = false

@ViewChild ('Secundaria') secundaria:ElementRef
@ViewChild ('ImagenIpem') imgIpen:ElementRef
@ViewChild ('SecundariaText') secundariaText:ElementRef

  constructor(private edicionService:EdicionService) { }

  ngOnInit(): void {
  }

modificarCampo(param:ElementRef){
  this.edicionService.modificarCampo(param)
}

}
