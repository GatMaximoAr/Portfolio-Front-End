import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AcercaService } from 'src/app/services/Acerca-de/acerca.service';
import {Acerca} from '../../../models/Acerca';

@Component({
  selector: 'app-acerca-add',
  templateUrl: './acerca-add.component.html',
  styleUrls: ['./acerca-add.component.css']
})
export class AcercaAddComponent implements OnInit {


  formularioAcercaDe: FormGroup;
  formularioEnviado:boolean = false
  previewEnvio:Acerca

  constructor(private _builder:FormBuilder, private acercaService:AcercaService,
    private router:Router) { 
    
    this.formularioAcercaDe = this._builder.group({
      nombre_usuario: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],

      apellido_usuario: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],

      imagen: ['', Validators.required],

      sobre_usuario: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],

      ocupacion: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],

      img_portada: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(valor: Acerca) {
    console.log(valor)
    this.previewEnvio = valor
    this.previewEnvio.imagen = "./assets/ImgPerfil/Perfil.jpeg"
    this.previewEnvio.img_portada = "./assets/ImgFondo/ImgFondo1.jpg"
    this.formularioEnviado = !this.formularioEnviado
    }

    postAcerca(acerca:Acerca) {
      this.acercaService.postAcerca(acerca)
      .subscribe(resp => {
        console.log(resp)
        window.location.reload()
      })
      this.goHome()
    }
    

  resetForm() {
    this.formularioEnviado = !this.formularioEnviado
    this.formularioAcercaDe.reset()
      
  }

  enviarform() {
    this.postAcerca(this.previewEnvio)
      
  }
  
  goHome() {
    this.router.navigate([''])
        
  }
}
