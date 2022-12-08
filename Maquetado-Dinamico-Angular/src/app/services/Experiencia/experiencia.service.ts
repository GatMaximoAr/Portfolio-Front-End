import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item_exp } from 'src/app/models/Item'; 
import { User } from 'src/app/models/User'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private url ="https://deploy-beta.fly.dev/relacionxp/traer/"
  private url1 ="https://deploy-beta.fly.dev/relacioxp/usuario/1"
  private url_Users = "" // url users
  private url_edit = "https://deploy-beta.fly.dev/relacioxp/editar"
  private url_delete = "https://deploy-beta.fly.dev/experiencia/delete"

  constructor(private http:HttpClient) { }

  getItems():Observable<Item_exp[]> {
    return this.http.get<Item_exp[]>(this.url)
  }

  postItem(newValorItem:Item_exp):Observable<Item_exp>{
    return this.http.post<Item_exp>(this.url1, newValorItem ,httpOptions)
  }

  editItem(itemtoEdit:Item_exp):Observable<Item_exp> {
    const editUrl = `${this.url_edit}/${itemtoEdit.id}`
    return this.http.put<Item_exp>(editUrl, itemtoEdit,httpOptions)
  }

  deleteItem(id:number):Observable<Item_exp> {
    const itemUrl = `${this.url_delete}/${id}`
    return this.http.delete<Item_exp>(itemUrl, httpOptions)
  } 

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.url_Users)
  }
}
