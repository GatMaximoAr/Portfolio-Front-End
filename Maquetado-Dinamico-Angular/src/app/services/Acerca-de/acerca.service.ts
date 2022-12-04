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

  private url = "http://localhost:8080/acerca/2/traer";

  constructor(private http:HttpClient) { }

  getAcerca():Observable<Acerca> {

    return this.http.get<Acerca>(this.url, {responseType : 'json'})
  }
}
