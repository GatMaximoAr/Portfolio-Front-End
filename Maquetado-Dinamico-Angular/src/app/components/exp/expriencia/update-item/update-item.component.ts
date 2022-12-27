import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service';
import { Item_exp } from '../../../../models/Item';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  item:Item_exp = {
    img_experiencia : "",
    img_href : "",
    actividad : [],
    sobre_experiencia: ""
  }
  indice:number
  
  formularioItemXp:FormGroup;
  
  foto:string
  previewEnvio:Item_exp
  
  formularioEnviado:boolean = false
  

  constructor(private dataService:ExperienciaService,
    private route:ActivatedRoute,
    private _builder:FormBuilder,
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
    this.indice = this.route.snapshot.params['id']
    this.getItems()
    
  }

  getItems() {
    this.dataService.getItems()
    .subscribe(resp => {
      let respaldo:Item_exp[] = resp
      respaldo.find(call => {
        if(call.id == this.indice) {
          this.item = call;
        }
      })
    })
    
  }


  get form(){
    return this.formularioItemXp.controls
  }

  get actividad(){
    return this.formularioItemXp.get('actividad') as FormArray;
  }

  onSubmit(valor:Item_exp){
   // valor.img_experiencia = this.valorImg
    this.previewEnvio = valor
    this.formularioEnviado = !this.formularioEnviado
  } 

  datosImg(event:Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files![0];
    console.log(file.name.toString())
    let filereader = new FileReader();
    filereader.readAsDataURL(file);
      filereader.addEventListener('load', (e)=>{
        //this.valorImg = e.target!.result!
        this.foto = e.target!.result?.toString()!
        })
  }

  putItem(datos:Item_exp){
    this.dataService.editItem(datos)
    .subscribe(data => {
      console.log(data)
      window.location.reload();
    })
    this.goHome()
  }

  addItemlist(){
   /*  (<FormArray>this.formularioItemXp.get('list')).push(new FormControl(null)); */
   this.actividad.push(new FormControl(null));
  }

  deleteItemList(index:number){
    this.actividad.removeAt(index);
    console.log(index)
  }

  goHome():void {
    this.router.navigate([''])
  }

  enviarform(){
    this.item.img_experiencia = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4__ElLqeg5sCJ2InBYVJxXw6kv-iM98eZlRXxtAD90glfNfDOX1gK1fik2ExGoMktrY&usqp=CAU"
    this.item.img_href = this.previewEnvio.img_href
    this.item.sobre_experiencia = this.previewEnvio.sobre_experiencia
    this.item.actividad = this.previewEnvio.actividad
    this.putItem(this.item)
    //this.router.navigate([''])
    console.log(this.item)
  }

  deleteItem() {
    this.dataService.deleteItem(this.item.id).subscribe(resp => {
      console.log(resp)
      window.location.reload();
    })
  this.goHome()
  }

  resetForm() {
    this.formularioEnviado = !this.formularioEnviado
    this.formularioItemXp.reset()

  }
}
