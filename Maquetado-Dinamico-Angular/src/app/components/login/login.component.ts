import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/LoginUsuario';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { TokenService } from 'src/app/services/Auth/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logError: boolean = false
  formularioLogin:FormGroup
  loginUsuario:Login
  islogged:boolean = false;
  roles:string[] = []

  constructor(private authService:AuthService,
    private route:Router, private __builder:FormBuilder,
    private tokenService:TokenService) { 

      this.formularioLogin = this.__builder.group({
        nombreUsuario: ['', Validators.required],
        password: ['', Validators.required]
      }
      )
    }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.islogged = true
      this.logError = false
      this.roles = this.tokenService.getAuthorities()
    }
  }

  cambiarValor() {
    this.authService.guest_Access_Value = true
    this.route.navigate(['/'])
  }

  onLogin(valor:Login):void {
    console.log(valor);
    
    this.authService.singIn(valor)
    .subscribe(resp => {
      this.islogged = true
      this.logError = false

      this.tokenService.setToken(resp.token)
      this.tokenService.setUserName(resp.nombreUsuario)
      this.tokenService.setAuthorities(resp.authorities)
      this.roles = resp.authorities
    }, err => {err
      this.islogged = false
      this.logError = true
      console.log(err)
    })
  }
}
