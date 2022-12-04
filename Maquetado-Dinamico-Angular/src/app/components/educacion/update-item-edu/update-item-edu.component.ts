import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionServiceService } from 'src/app/services/Educacion/educacion-service.service';

@Component({
  selector: 'app-update-item-edu',
  templateUrl: './update-item-edu.component.html',
  styleUrls: ['./update-item-edu.component.css']
})
export class UpdateItemEduComponent implements OnInit {

  indice:number
  item:Educacion = {
    titulo_des:"",
    imagen:"",
    vinculo_img:"",
    sobre_educacion:""
  }

  formularioItemEdu:FormGroup
  formularioEnviado:boolean = false
  previewEnvio:Educacion



  constructor(private _builder:FormBuilder, private eduService:EducacionServiceService,
    private router:Router, private route:ActivatedRoute) { 

    this.formularioItemEdu = this._builder.group({
      titulo_des: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      imagen: ['', Validators.required],
      vinculo_img: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      sobre_educacion: ['',[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]]
    })
  }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id']
    this.getItem();
  }

  getItem():void {
    this.eduService.getFormaciones()
    .subscribe(resp => {
      resp.find(call => {
        if(call.id == this.indice) {
          this.item = call;
        }
      })
    })
  }

  putItem(formacion:Educacion):void {
    this.eduService.putFormacion(formacion)
    .subscribe(resp => {
      console.log(resp)
    })
  }

    enviarform() {
      this.putItem(this.previewEnvio);
      this.router.navigate([''])
    }
    resetForm() {
      this.formularioEnviado = !this.formularioEnviado;
      this.formularioItemEdu.reset();
    }
    onSubmit(valor:Educacion) {
      this.previewEnvio = valor;
      this.previewEnvio.imagen = "https://i.ytimg.com/vi/2wNiM4LWMKc/maxresdefault.jpg"
      this.previewEnvio.id = this.indice
      this.formularioEnviado = !this.formularioEnviado;
      console.log(this.previewEnvio)
    }

    deleteItem() {
      this.eduService.deleteFormacion(this.indice)
      .subscribe(resp => {
        console.log(resp)
      })
      this.router.navigate([''])
    }
    goHome() {
      this.router.navigate([''])
    }

}
