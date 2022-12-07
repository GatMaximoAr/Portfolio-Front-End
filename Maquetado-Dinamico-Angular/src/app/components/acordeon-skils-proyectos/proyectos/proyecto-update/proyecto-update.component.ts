import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoServiceService } from 'src/app/services/Proyecto/proyecto-service.service';

@Component({
  selector: 'app-proyecto-update',
  templateUrl: './proyecto-update.component.html',
  styleUrls: ['./proyecto-update.component.css']
})
export class ProyectoUpdateComponent implements OnInit {


  formularioItemPro:FormGroup
  formularioEnviado:boolean = false
  item:Proyecto ={
    titulo:"",
    imagen:"",
    vinculo_img:"",
    sobre_proyecto:""
  }
  indice:number
  previewEnvio:Proyecto

  constructor(private _builder:FormBuilder, private proyectoService:ProyectoServiceService,
    private router:Router, private route:ActivatedRoute) { 

      this.formularioItemPro = this._builder.group({
        titulo: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        imagen: ['', Validators.required],
        vinculo_img: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        sobre_proyecto: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]]
      })
    }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id']
    this.getItem()
  }

  getItem(): void {
    this.proyectoService.getProyectos()
    .subscribe(resp => {
      
      let respaldo:Proyecto[] = resp
      
      for (let proyecto of respaldo) {
        if (proyecto.id == this.indice) {
          this.item = proyecto
        }
      }
    })
  }

  onSubmit(valor:Proyecto):void {
    this.previewEnvio = valor;
    this.previewEnvio.id = this.indice
    this.previewEnvio.imagen = "https://i.ytimg.com/vi/KCnyluZDbBk/maxresdefault.jpg"
    this.formularioEnviado = !this.formularioEnviado;
  }

  resetForm() {
    this.formularioEnviado = !this.formularioEnviado;
    this.formularioItemPro.reset();
  }

   putItem(proyecto:Proyecto):void {
    this.proyectoService.putProyecto(proyecto)
    .subscribe(resp => {
      console.log(resp)
    })
  }
  
  deleteItem() {
    this.proyectoService.deleteProyecto(this.indice)
    .subscribe(resp => {
      console.log(resp)
    })
    }

  enviarform() {
    this.putItem(this.previewEnvio)
    //this.router.navigate([''])
    console.log(this.previewEnvio)
  }

  goHome() {
    this.router.navigate([''])
  }

}
