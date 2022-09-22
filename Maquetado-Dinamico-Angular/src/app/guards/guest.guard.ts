import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  access:boolean
  access_admin: boolean;

  constructor(private authService:AuthService, private routes:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.authService.guest_Access.subscribe(resp => this.access = resp)
      this.authService.edicion_Access.subscribe(resp => this.access_admin = resp)

     if (this.access || this.access_admin) {
      // console.log('guest retorno true')
      return true
    }
    else {
      return this.routes.navigate(['/login'])
    }
  }
  
}
