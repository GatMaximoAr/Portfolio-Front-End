import { Component, OnDestroy, OnInit, } from '@angular/core';
import {Item} from '../../models/Item'
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expriencia',
  templateUrl: './expriencia.component.html',
  styleUrls: ['./expriencia.component.css']
})
export class ExprienciaComponent implements OnInit, OnDestroy {

  Items:Item[] = []
  edicion:boolean
  sub:Subscription

  constructor(
    private dataService:DataService, private authService:AuthService
    ) { 
      this.sub = this.authService.edicion_Access.subscribe(resp => this.edicion = resp)
    }

    getItems(){
      this.dataService.getItems()
      .subscribe(resp => this.Items = resp)
    }

  ngOnInit(): void {
    this.getItems()
    // console.log(this.edicion)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
