import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../../models/Acerca';
import { TokenService } from '../Auth/token.service';
import { StorageService } from '../storage.service';


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

  private url = "https://deploy-render-yu6n.onrender.com/acerca";

  private url_post = "https://deploy-render-yu6n.onrender.com/acerca/usuario";

  private url_put ="https://deploy-render-yu6n.onrender.com/acerca/editar"

  private url_delete ="https://deploy-render-yu6n.onrender.com/delete/acerca"

  private url_get1 = "https://deploy-render-yu6n.onrender.com/acerca"

  private path = "acerca-usuario/"

  constructor(private http:HttpClient, private tokenService:TokenService,
    private storage:StorageService) { }

  get user():string {
    return this.tokenService.getUserName()
  }

  getAcerca():Observable<Acerca> {
    const acerca_user = `${this.url}/${this.user}/`
    return this.http.get<Acerca>(acerca_user, {responseType : 'json'})
  }

  getAcercaById(id:number):Observable<Acerca> {
    const url_acerca = `${this.url_get1}/${id}/traer`
    return this.http.get<Acerca>(url_acerca)
  }

  postAcerca(acerca:Acerca):Observable<Acerca> {
    const post_url = `${this.url_post}/${this.user}/crear`
    return this.http.post<Acerca>(post_url, acerca, httpOptions);
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
