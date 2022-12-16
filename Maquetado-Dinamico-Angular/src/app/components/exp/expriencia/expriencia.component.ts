import { Component, OnDestroy, OnInit, } from '@angular/core';
import {Item_exp} from '../../../models/Item'
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service'; 
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expriencia',
  templateUrl: './expriencia.component.html',
  styleUrls: ['./expriencia.component.css']
})
export class ExprienciaComponent implements OnInit, OnDestroy {

  Items:Item_exp[] = []
  edicion:boolean
  sub:Subscription
  subData:Subscription

  constructor(
    private dataService:ExperienciaService, private authService:AuthService
    ) { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)
    }

    getItems(){
      this.subData = this.dataService.getItems()
      .subscribe(resp => this.Items = resp)
    }

  ngOnInit(): void {
    this.getItems()
    //console.log(this.Items)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.subData.unsubscribe()
  }

}
