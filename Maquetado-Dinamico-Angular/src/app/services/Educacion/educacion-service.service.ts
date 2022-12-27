import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../../models/Educacion';
import { TokenService } from '../Auth/token.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {

  //private url_get ="http://localhost:8080/educacion/traer"
  private url_getBy = "http://localhost:8080/formaciones"
  private url_get_one ="http://localhost:8080/educacion"
  private url_post = "http://localhost:8080/educacion/usuario"
  private url_put = "http://localhost:8080/educacion/editar"
  private url_delete = "http://localhost:8080/educacion/delete"

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  get user():string {
    return this.tokenService.getUserName()
  }

  getFormaciones():Observable<Educacion[]> {
    const url_get = `${this.url_getBy}/${this.user}/traer`
    return this.http.get<Educacion[]>(url_get)
  }

  getById(id:number):Observable<Educacion> {
    const url_educacion = `${this.url_get_one}/${id}/traer`
    return this.http.get<Educacion>(url_educacion)
  }

  postFormacion(formacion:Educacion):Observable<Educacion> {
    const post_url = `${this.url_post}/${this.user}/crear`
    return this.http.post<Educacion>(post_url, formacion, httpOptions)
  }

  putFormacion(item:Educacion):Observable<Educacion> {
    const itemUrl = `${this.url_put}/${item.id}`
    return this.http.put<Educacion>(itemUrl, item, httpOptions)
  }

  deleteFormacion(id:number):Observable<Educacion> {
    const itemUrl = `${this.url_delete}/${id}`
    return this.http.delete<Educacion>(itemUrl)
  }
}
