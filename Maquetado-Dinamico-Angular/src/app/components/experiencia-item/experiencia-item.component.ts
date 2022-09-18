import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  @Input('data') item:Item

  constructor() { }

  ngOnInit(): void {
  }

}
