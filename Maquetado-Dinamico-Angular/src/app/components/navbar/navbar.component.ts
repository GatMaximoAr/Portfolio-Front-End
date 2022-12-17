import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/Auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged:boolean = false

  constructor(private tokenService:TokenService, private route:Router) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true
    }else {
      this.isLogged = false
    }

    //console.log(this.isLogged)
    //console.log(this.tokenService.getToken())
    //console.log(this.tokenService.getAuthorities())
  }

  logOut() {
   this.tokenService.logOut()
  }


}
