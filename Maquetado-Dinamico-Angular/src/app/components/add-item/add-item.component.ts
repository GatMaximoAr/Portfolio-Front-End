import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../../models/Item';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  formularioItemXp:FormGroup
  valorImg: string | ArrayBuffer;
  formularioEnviado:boolean = false
  previewEnvio:Item

  constructor(private _builder:FormBuilder,
    private dataService:DataService,
    private router:Router) { 

      this.formularioItemXp = this._builder.group({
        img: ['', Validators.required],
        text: ['', Validators.required],
        href: ['', Validators.required],
    
        list:this._builder.array([
          this._builder.control('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)])
          
        ])
    })
    }

  ngOnInit(): void {
  }


  onSubmit(valor:Item){
    valor.img = this.valorImg
    this,this.previewEnvio = valor
    this.formularioEnviado = !this.formularioEnviado
    
  }

  get form(){
    return this.formularioItemXp.controls
  }

  get list(){
    return this.formularioItemXp.get('list') as FormArray;
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
    this.list.push(new FormControl(null));
   }

   deleteItemList(index:number){
    this.list.removeAt(index);
  }

  postItem(parametro:Item) {
    this.dataService.postItem(parametro)
    .subscribe(data => {
      console.log(data)
    })
  }

  enviarform() {
    this.postItem(this.previewEnvio)
    this.router.navigate([''])
  }

  goHome():void {
    this.router.navigate(['/Portfolio'])
  }

  resetForm() {
    this.formularioEnviado = !this.formularioEnviado
    this.formularioItemXp.reset()
  }
}
