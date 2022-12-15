import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/Proyecto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ProyectoServiceService {

  private url ="https://deploy-beta2.fly.dev/proyecto/traer"
  private url_post="https://deploy-beta2.fly.dev/proyecto/usuario/1/crear"
  private url_put="https://deploy-beta2.fly.dev/proyecto/editar"
  private url_delete="https://deploy-beta2.fly.dev/proyecto/delete"
  

  constructor(private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url)
  }

  postNewProyecto(item:Proyecto):Observable<Proyecto> {
    return this.http.post<Proyecto>(this.url_post, item, httpOptions)
  }

  putProyecto(editProyecto:Proyecto):Observable<Proyecto> {
    const itemUrl = `${this.url_put}/${editProyecto.id}`
    return this.http.put<Proyecto>(itemUrl, editProyecto, httpOptions)
  }

  deleteProyecto(id:number):Observable<Proyecto> {
    const itemUrl = `${this.url_delete}/${id}`
    return this.http.delete<Proyecto>(itemUrl)
  }
}
