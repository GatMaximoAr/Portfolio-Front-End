import { Component, OnDestroy, OnInit, } from '@angular/core';
import {Item_exp} from '../../../models/Item'
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service'; 
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/Auth/token.service';

@Component({
  selector: 'app-expriencia',
  templateUrl: './expriencia.component.html',
  styleUrls: ['./expriencia.component.css']
})
export class ExprienciaComponent implements OnInit, OnDestroy {

  Items:Item_exp[] = []
  isAdmin:boolean = false
  subData:Subscription
  roles:string[] = []

  constructor(
    private dataService:ExperienciaService, private tokenService:TokenService) { }

    getItems(){
      this.subData = this.dataService.getItems()
      .subscribe(resp => this.Items = resp)
    }

  ngOnInit(): void {
    this.getItems()
    this.roles = this.tokenService.getAuthorities()
    this.getRoles()
    //console.log(this.Items)
  }

  getRoles():void {
    this.roles.forEach(rol => {
      if(rol === "ROLE_ADMIN") {
        this.isAdmin = true
      }
    })
  }

  ngOnDestroy(): void {
    this.subData.unsubscribe()
  }

}
