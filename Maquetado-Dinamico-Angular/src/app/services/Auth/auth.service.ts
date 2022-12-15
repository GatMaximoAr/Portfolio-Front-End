import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtDto } from 'src/app/models/JwtDto';
import { Login } from 'src/app/models/LoginUsuario';
import { NuevoUsuario } from 'src/app/models/NuevoUsuario';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_url:string = "http://localhost:8080/auth/" 
  
  private admin_Edicion:BehaviorSubject<boolean> = new BehaviorSubject(true)

  private guest:BehaviorSubject<boolean> = new BehaviorSubject(false)
  
  constructor(private http:HttpClient) { }

  get guest_Access() {
    return this.guest.asObservable()
  }

  set guest_Access_Value(value:boolean) {
    this.guest.next(value)
  }

  get edicion_Access() {
    return this.admin_Edicion.asObservable()
  }

  set admin_Access_Value(valor:boolean) {
    this.admin_Edicion.next(valor)
  }

  public singUp(nuenoUsuario:NuevoUsuario):Observable<any> {
    return this.http.post(this.auth_url + 'singUp', nuenoUsuario, httpOptions)
  }

  public singIn(loginUsuario:Login):Observable<JwtDto> {
    return this.http.post<JwtDto>(this.auth_url + 'singIn', loginUsuario, httpOptions)
  }
}
