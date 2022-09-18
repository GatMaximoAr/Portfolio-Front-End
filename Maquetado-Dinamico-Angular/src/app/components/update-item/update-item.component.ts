import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  item:Item = {
    img : "",
    img_href : "",
    list : [],
    text : ""
  }
  indice:number
  formularioItemXp:FormGroup;
  valorImg: string | ArrayBuffer;
  previewEnvio:Item
  formularioEnviado:boolean = false
  

  constructor(private dataService:DataService,
    private route:ActivatedRoute,
    private _builder:FormBuilder,
    private router:Router) { 

      this.formularioItemXp = this._builder.group({
        img: [''],
        text: [''],
        href: [''],
    
        list:this._builder.array([
          this._builder.control('')
          
        ])
    })
    }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'] - 1
    this.getItems()
    
  }

  getItems() {
    this.dataService.getItems()
    .subscribe(resp => {
      let respaldo:Item[] = resp
      this.item = respaldo[this.indice]
    })
    
  }


  get form(){
    return this.formularioItemXp.controls
  }

  get list(){
    return this.formularioItemXp.get('list') as FormArray;
  }

  onSubmit(valor:Item){
    valor.img = this.valorImg
    this.previewEnvio = valor
    this.formularioEnviado = !this.formularioEnviado
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

  putItem(datos:Item){
    this.dataService.editItem(datos)
    .subscribe(data => {
      console.log(data)
    })
  }

  addItemlist(){
   /*  (<FormArray>this.formularioItemXp.get('list')).push(new FormControl(null)); */
   this.list.push(new FormControl(null));
  }

  deleteItemList(index:number){
    this.list.removeAt(index);
    console.log(index)
  }

  goHome():void {
    this.router.navigate([''])
  }

  enviarform(){
    this.item.img = this.previewEnvio.img
    this.item.img_href = this.previewEnvio.img_href
    this.item.text = this.previewEnvio.text
    this.putItem(this.item)
    this.router.navigate([''])
  }

  deleteItem() {
    this.dataService.deleteItem(this.item).subscribe(resp => {
      console.log(resp)
    })
    this.router.navigate([''])
  }

}
