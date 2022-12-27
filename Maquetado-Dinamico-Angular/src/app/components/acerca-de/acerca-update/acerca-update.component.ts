import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca } from 'src/app/models/Acerca';
import { AcercaService } from 'src/app/services/Acerca-de/acerca.service';

@Component({
  selector: 'app-acerca-update',
  templateUrl: './acerca-update.component.html',
  styleUrls: ['./acerca-update.component.css']
})
export class AcercaUpdateComponent implements OnInit {


  formularioAcercaDe: FormGroup;
  formularioEnviado:boolean = false
  previewEnvio:Acerca
  indice:number

  constructor(private _builder:FormBuilder, private acercaService:AcercaService,
    private route:ActivatedRoute, private router:Router) { 

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
    this.indice = this.route.snapshot.params['id']
  }

  onSubmit(valor: Acerca) {
    console.log(valor)
    this.previewEnvio = valor
    this.previewEnvio.id = this.indice 
    this.previewEnvio.imagen = "./assets/ImgPerfil/Perfil.jpeg"
    this.previewEnvio.img_portada = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCMXuW6lq6qNBF0ZadysLZ_8IKuudtvGdvQ&usqp=CAU"
    this.formularioEnviado = !this.formularioEnviado
    }

    putAcerca(acerca:Acerca) {
      this.acercaService.putAcerca(acerca)
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
    this.putAcerca(this.previewEnvio)
      
  }

  deleteItem():void {
    this.acercaService.deleteAcerca(this.indice)
    .subscribe(resp => {
      console.log(resp)
      window.location.reload()
    })

    this.goHome()
    }
  
  goHome() {
    this.router.navigate([''])
        
  }

}
