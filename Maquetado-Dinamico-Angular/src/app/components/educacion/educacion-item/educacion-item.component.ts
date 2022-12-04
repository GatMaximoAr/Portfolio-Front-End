import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  mostrar:boolean = true;

  @Input('data') item:Educacion
  edicion:boolean = true;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.item)
  }

}
