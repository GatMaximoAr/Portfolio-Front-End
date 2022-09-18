import { Component, OnInit, } from '@angular/core';
import {Item} from '../../models/Item'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-expriencia',
  templateUrl: './expriencia.component.html',
  styleUrls: ['./expriencia.component.css']
})
export class ExprienciaComponent implements OnInit {

  Items:Item[] = []

  constructor(
    private dataService:DataService
    ) { }

    getItems(){
      this.dataService.getItems()
      .subscribe(resp => this.Items = resp)
    }

  ngOnInit(): void {
    this.getItems()
  }

}
