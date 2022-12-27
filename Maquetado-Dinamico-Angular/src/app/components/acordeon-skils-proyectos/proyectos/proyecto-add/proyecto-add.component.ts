import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectoServiceService } from 'src/app/services/Proyecto/proyecto-service.service';

@Component({
  selector: 'app-proyecto-add',
  templateUrl: './proyecto-add.component.html',
  styleUrls: ['./proyecto-add.component.css']
})
export class ProyectoAddComponent implements OnInit {

  formularioItemPro:FormGroup
  formularioEnviado:boolean = false
  previewEnvio:Proyecto

  constructor(private _builder:FormBuilder, private proyectoService:ProyectoServiceService,
    private router:Router) { 

      this.formularioItemPro = this._builder.group({
        titulo: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        imagen: ['', Validators.required],
        vinculo_img: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
        sobre_proyecto: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]]
      })
    }

  ngOnInit(): void {
  }

  onSubmit(valor:Proyecto):void {
    this.previewEnvio = valor;
    this.previewEnvio.imagen = "https://i.ytimg.com/vi/KCnyluZDbBk/maxresdefault.jpg"
    this.formularioEnviado = !this.formularioEnviado;
  }

  resetForm() {
    this.formularioEnviado = !this.formularioEnviado;
    this.formularioItemPro.reset();
  }

   newPost(proyecto:Proyecto):void {
    this.proyectoService.postNewProyecto(proyecto)
    .subscribe(resp => {
      console.log(resp)
      window.location.reload()
    })
    this.goHome()
  } 

  enviarform() {
    this.newPost(this.previewEnvio)
    //this.router.navigate([''])
    console.log(this.previewEnvio)
  }

  goHome() {
    this.router.navigate([''])
  }
}
