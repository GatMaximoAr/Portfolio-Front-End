import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Item_exp } from 'src/app/models/Item'; 
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit, OnDestroy {

  @Input('data') item:Item_exp

  edicion:boolean
  sub:Subscription

  constructor(private authSrvice:AuthService) { 
    this.sub = this.authSrvice.edicion_Access.subscribe(resp => this.edicion = resp)
  }

  ngOnInit(): void {
    //console.log(this.item)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
