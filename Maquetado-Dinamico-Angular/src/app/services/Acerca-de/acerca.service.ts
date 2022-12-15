import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../../models/Acerca';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};

@Injectable({
  providedIn: 'root'
})
export class AcercaService {   

  private url = "https://deploy-beta2.fly.dev/acerca/usuario/traer";

  private url_post = "https://deploy-beta2.fly.dev/acerca/usuario/1/crear";

  private url_put ="https://deploy-beta2.fly.dev/editar"

  private url_delete ="https://deploy-beta2.fly.dev/delete/acerca"

  constructor(private http:HttpClient) { }

  getAcerca():Observable<Acerca[]> {

    return this.http.get<Acerca[]>(this.url, {responseType : 'json'})
  }

  postAcerca(acerca:Acerca):Observable<Acerca> {
    return this.http.post<Acerca>(this.url_post, acerca, httpOptions);
  }

  putAcerca(acerca:Acerca):Observable<Acerca> {
    const item_url = `${this.url_put}/${acerca.id}`
    return this.http.put<Acerca>(item_url, acerca, httpOptions)
  }

  deleteAcerca(id:number):Observable<Acerca> {
    const item_url = `${this.url_delete}/${id}`
    return this.http.delete<Acerca>(item_url, httpOptions)
  }
}
