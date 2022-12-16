import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/Auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLogged:boolean = false
  sub:Subscription

  constructor(private tokenService:TokenService, private route:Router) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true
    }else {
      this.isLogged = false
    }

    console.log(this.isLogged)
    console.log(this.tokenService.getToken())
  }

  logOut() {
   this.tokenService.logOut()
  }

  ngOnDestroy(): void {
    
  }

}
