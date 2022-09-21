import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagenPortadaComponent } from './components/imagen-portada/imagen-portada.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExprienciaComponent } from './components/expriencia/expriencia.component';
import { AcordeonSkilsProyectosComponent } from './components/acordeon-skils-proyectos/acordeon-skils-proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagenPortadaComponent,
    AcercaDeComponent,
    ExprienciaComponent,
    AcordeonSkilsProyectosComponent,
    EducacionComponent,
    HomeComponent,
    FooterComponent,
    ExperienciaItemComponent,
    AddItemComponent,
    UpdateItemComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
