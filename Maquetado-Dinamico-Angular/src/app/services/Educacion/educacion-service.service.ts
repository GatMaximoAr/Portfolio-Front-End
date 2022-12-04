import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../../models/Educacion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {

  private url_get ="http://localhost:8080/educacion/traer"
  private url_post = "http://localhost:8080/educacion/usuario/52/crear"
  private url_put = "http://localhost:8080/educacion/editar"
  private url_delete = "http://localhost:8080/educacion/delete"

  constructor(private http:HttpClient) { }

  getFormaciones():Observable<Educacion[]> {

    return this.http.get<Educacion[]>(this.url_get)
  }

  postFormacion(formacion:Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(this.url_post, formacion, httpOptions)
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
