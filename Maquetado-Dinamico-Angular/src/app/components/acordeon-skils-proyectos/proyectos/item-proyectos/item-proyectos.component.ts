import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-item-proyectos',
  templateUrl: './item-proyectos.component.html',
  styleUrls: ['./item-proyectos.component.css']
})
export class ItemProyectosComponent implements OnInit {
  
  edicion:boolean = true
  
  @Input('data') item:Proyecto

  constructor() { }

  ngOnInit(): void {
  }

}
