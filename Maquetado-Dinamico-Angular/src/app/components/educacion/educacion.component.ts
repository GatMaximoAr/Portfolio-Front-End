import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Educacion } from 'src/app/models/Educacion';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { TokenService } from 'src/app/services/Auth/token.service';
import { EducacionServiceService } from 'src/app/services/Educacion/educacion-service.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit, OnDestroy {

  isAdmin:boolean = false
  subData:Subscription
  formaciones:Educacion[] = []
  roles:string[] = []


/* @ViewChild ('Secundaria') secundaria:ElementRef
@ViewChild ('ImagenIpem') imgIpen:ElementRef
@ViewChild ('SecundariaText') secundariaText:ElementRef */

  constructor( private tokenService:TokenService, private eduService:EducacionServiceService) { }

  ngOnInit(): void {
    this.getFormaciones();
    this.roles = this.tokenService.getAuthorities()
    this.getRoles()
    //console.log(this.formacion)
  }

  getRoles():void {
    this.roles.forEach(rol => {
      if(rol === "ROLE_ADMIN") {
        this.isAdmin = true
      }
    })
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
    this.subData.unsubscribe()
  }
}
