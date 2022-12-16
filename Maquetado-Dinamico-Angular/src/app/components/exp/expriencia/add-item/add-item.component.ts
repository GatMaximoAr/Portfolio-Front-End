import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item_exp } from 'src/app/models/Item'; 
import { ItemList } from 'src/app/models/ItemList';
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service'; 

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  formularioItemXp:FormGroup
  valorImg: string | ArrayBuffer;
  formularioEnviado:boolean = false
  previewEnvio:Item_exp

  constructor(private _builder:FormBuilder,
    private dataService:ExperienciaService,
    private router:Router) { 

      this.formularioItemXp = this._builder.group({
        img_experiencia: ['', Validators.required],
        sobre_experiencia: ['', Validators.required],
        img_href: ['', Validators.required],
    
        actividad:this._builder.array([
          this._builder.control('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)])
          
        ])
    })
    }

  ngOnInit(): void {
  }


  onSubmit(valor:Item_exp){
    //valor.img_experiencia = this.valorImg
    this.previewEnvio = valor
    this.previewEnvio.img_experiencia = "https://www.snau.es/blog/wp-content/uploads/2019/03/cachorro-1.jpg"
    console.log(this.previewEnvio)
    this.formularioEnviado = !this.formularioEnviado
    
  }

  get form(){
    return this.formularioItemXp.controls
  }

  get actividad(){
    return this.formularioItemXp.get('actividad') as FormArray;
  }

   datosImg(event:Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files![0];
    let filereader = new FileReader();
    filereader.readAsDataURL(file);
      filereader.addEventListener('load', (e)=>{
        this.valorImg = e.target!.result!
        })
  }
 
  addItemlist(){
    /*  (<FormArray>this.formularioItemXp.get('list')).push(new FormControl(null)); */
    this.actividad.push(new FormControl(null));
   }

   deleteItemList(index:number){
    this.actividad.removeAt(index);
  }

  postItem(parametro:Item_exp) {
    this.dataService.postItem(parametro)
    .subscribe(data => {
      console.log(data)
    })
   /* this.router.navigate(['/portfolio'])
  .then(() => {
    window.location.reload();
  });*/
  }

  enviarform() {
    this.postItem(this.previewEnvio)
    //this.router.navigate([''])
  }

  goHome():void {
    this.router.navigate(['/Portfolio'])
  }

  resetForm() {
    this.formularioEnviado = !this.formularioEnviado
    this.formularioItemXp.reset()
  }

 /* convertArrayobject(actividades:ItemList[]):ItemList[] {
    const lista:ItemList[] = []

    for (let act of actividades) {
      var item:ItemList = {
        actividad: act.actividad
      }
      lista.push(item)
    } 

    return lista;
  } */
}
