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

  private url ="http://localhost:8080/proyecto/traer"

  constructor(private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url)
  }
}
