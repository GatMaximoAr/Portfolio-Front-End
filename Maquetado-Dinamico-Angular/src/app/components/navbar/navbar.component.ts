import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  logeado:boolean
  sub:Subscription

  constructor(private authService:AuthService, private route:Router) { 
    this.sub = this.authService.edicion_Access.subscribe(resp => this.logeado = resp)
  }

  ngOnInit(): void {
  }

  cambiarValor() {
    this.authService.admin_Access_Value = !this.logeado
    this.route.navigate(['/login'])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
