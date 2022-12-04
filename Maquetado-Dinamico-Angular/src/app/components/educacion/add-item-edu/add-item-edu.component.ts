import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionServiceService } from 'src/app/services/Educacion/educacion-service.service';

@Component({
  selector: 'app-add-item-edu',
  templateUrl: './add-item-edu.component.html',
  styleUrls: ['./add-item-edu.component.css']
})
export class AddItemEduComponent implements OnInit {

  formularioItemEdu:FormGroup
  formularioEnviado:boolean = false
  previewEnvio:Educacion

  constructor(private _builder:FormBuilder, private eduService:EducacionServiceService,
    private router:Router) { 

    this.formularioItemEdu = this._builder.group({
      titulo_des: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      imagen: ['', Validators.required],
      vinculo_img: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      sobre_educacion: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(valor:Educacion):void {
    this.previewEnvio = valor;
    this.previewEnvio.imagen = "https://i.ytimg.com/vi/2wNiM4LWMKc/maxresdefault.jpg"
    this.formularioEnviado = !this.formularioEnviado;
  }

  resetForm() {
    this.formularioEnviado = !this.formularioEnviado;
    this.formularioItemEdu.reset();
  }

  newPost(formacion:Educacion):void {
    this.eduService.postFormacion(formacion)
    .subscribe(resp => {
      console.log(resp)
    })
  }

  enviarform() {
    this.newPost(this.previewEnvio)
    this.router.navigate([''])
  }

  goHome() {
    this.router.navigate([''])
  }
    
}
