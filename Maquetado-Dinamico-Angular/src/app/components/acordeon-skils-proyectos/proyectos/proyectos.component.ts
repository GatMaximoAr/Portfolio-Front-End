import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoServiceService } from 'src/app/services/Proyecto/proyecto-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = []
  edicion: boolean;

  constructor(private proyectoService:ProyectoServiceService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

   getProyectos():void {
    this.proyectoService.getProyectos()
    .subscribe(resp => {
      this.proyectos = resp;
      console.log(resp);
    }) }

}
