import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/Proyecto';
import { TokenService } from '../Auth/token.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ProyectoServiceService {

  private url_get ="https://deploy-render-yu6n.onrender.com/proyecto/traer"
  private url_getBy="https://deploy-render-yu6n.onrender.com/proyectos"
  private url_get_one ="https://deploy-render-yu6n.onrender.com/proyecto"
  private url_post="https://deploy-render-yu6n.onrender.com/proyecto/usuario"
  private url_put="https://deploy-render-yu6n.onrender.com/proyecto/editar"
  private url_delete="https://deploy-render-yu6n.onrender.com/proyecto/delete"
  

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  get user():string {
    return this.tokenService.getUserName()
  }

  getProyectos():Observable<Proyecto[]> {
    const url_get = `${this.url_getBy}/${this.user}/traer`
    return this.http.get<Proyecto[]>(url_get)
  }

  getById(id:number):Observable<Proyecto> {
    const url_proyecto = `${this.url_get_one}/${id}/traer`
    return this.http.get<Proyecto>(url_proyecto)
  }

  postNewProyecto(item:Proyecto):Observable<Proyecto> {
    const post_url = `${this.url_post}/${this.user}/crear`
    return this.http.post<Proyecto>(post_url, item, httpOptions)
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
