import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private admin_Edicion:BehaviorSubject<boolean> = new BehaviorSubject(false)

  private guest:BehaviorSubject<boolean> = new BehaviorSubject(false)
  
  constructor() { }

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
}
