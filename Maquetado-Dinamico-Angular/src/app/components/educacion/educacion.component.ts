import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Educacion } from 'src/app/models/Educacion';
import { AuthService } from 'src/app/services/auth.service';
import { EducacionServiceService } from 'src/app/services/Educacion/educacion-service.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit, OnDestroy {

  mostrar:boolean = false
  edicion:boolean
  sub:Subscription
  subData:Subscription
  formaciones:Educacion[] = []

/* @ViewChild ('Secundaria') secundaria:ElementRef
@ViewChild ('ImagenIpem') imgIpen:ElementRef
@ViewChild ('SecundariaText') secundariaText:ElementRef */

  constructor( private authService:AuthService, private eduService:EducacionServiceService) { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)
    }

  ngOnInit(): void {
    this.getFormaciones();
    //console.log(this.formacion)
  }

  

  getFormaciones():void {
    this.subData = this.eduService.getFormaciones().subscribe(resp => {
      this.formaciones = resp;
      //console.log(resp);
      //console.log(this.formaciones);
    })

    //console.log(this.formaciones)


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.subData.unsubscribe()
  }
}
