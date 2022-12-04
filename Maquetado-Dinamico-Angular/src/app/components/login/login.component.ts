import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienciaService } from 'src/app/services/Experiencia/experiencia.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logError: boolean = false
  formularioLogin:FormGroup
  user:User[] = []

  constructor(private authService:AuthService,
    private route:Router, private __builder:FormBuilder, 
    private dataService:ExperienciaService) {
      
      this.dataService.getUsers().subscribe(resp => this.user = resp) 

      this.formularioLogin = this.__builder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      }
      )
    }

  ngOnInit(): void {
  }

  cambiarValor() {
    this.authService.guest_Access_Value = true
    this.route.navigate(['/'])
  }

  adminLog(valor:User) {
    for(let i of this.user) {
      if (i.userName == valor.userName && i.password == valor.password) {
        this.authService.admin_Access_Value = true
        alert("Iniciaste Sesion!")
        this.route.navigate(['/']) }

        else {
          this.logError = true
          
        }
    }
    
  }

}
