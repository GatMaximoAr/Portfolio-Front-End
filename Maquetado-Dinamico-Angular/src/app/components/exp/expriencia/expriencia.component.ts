import { Component, OnDestroy, OnInit, } from '@angular/core';
import {Item_exp} from '../../../models/Item'
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service'; 
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/Auth/token.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-expriencia',
  templateUrl: './expriencia.component.html',
  styleUrls: ['./expriencia.component.css']
})
export class ExprienciaComponent implements OnInit, OnDestroy {

  Items:Item_exp[] = []
  isAdmin:boolean = false
  sub:Subscription
  roles:string[] = []

  constructor(
    private dataService:ExperienciaService, private tokenService:TokenService,
    private storage:StorageService) {

      this.sub = this.storage._Reload.subscribe(() => {
        this.getItems()
      })
     }

    getItems(){
      this.dataService.getItems()
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

  deleteItem(itemId:number):void {
    console.log(itemId)

    this.dataService.deleteItem(itemId)
    .subscribe(resp => {
      console.log(resp)
      window.location.reload()
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
