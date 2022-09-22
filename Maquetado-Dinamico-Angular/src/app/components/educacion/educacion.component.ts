import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EdicionService } from '../edicion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit, OnDestroy {

  mostrar:boolean = false
  edicion:boolean
  sub:Subscription

@ViewChild ('Secundaria') secundaria:ElementRef
@ViewChild ('ImagenIpem') imgIpen:ElementRef
@ViewChild ('SecundariaText') secundariaText:ElementRef

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
