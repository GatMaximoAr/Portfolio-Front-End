import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  access_admin:boolean

  constructor(private authService:AuthService, private route:Router) {
    this.authService.edicion_Access.subscribe(resp => this.access_admin = resp)
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.access_admin){
        // console.log('admin retorno true')
        return true
      }
        else {
          // console.log('admin retorno false')
          return this.route.navigate(['/login'])
      
      }
  }
  
}
