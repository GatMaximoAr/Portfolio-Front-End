import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagenPortadaComponent } from './components/imagen-portada/imagen-portada.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExprienciaComponent } from './components/exp/expriencia/expriencia.component';
import { AcordeonSkilsProyectosComponent } from './components/acordeon-skils-proyectos/acordeon-skils-proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaItemComponent } from './components/exp/expriencia/experiencia-item/experiencia-item.component'; 
import { AddItemComponent } from './components/exp/expriencia/add-item/add-item.component'; 
import { UpdateItemComponent } from './components/exp/expriencia/update-item/update-item.component';
import { LoginComponent } from './components/login/login.component';
import { EducacionItemComponent } from './components/educacion/educacion-item/educacion-item.component';
import { SkillsComponent } from './components/acordeon-skils-proyectos/skills/skills.component';
import { ProyectosComponent } from './components/acordeon-skils-proyectos/proyectos/proyectos.component';
import { AddItemEduComponent } from './components/educacion/add-item-edu/add-item-edu.component';
import { UpdateItemEduComponent } from './components/educacion/update-item-edu/update-item-edu.component';
import { AcercaAddComponent } from './components/acerca-de/acerca-add/acerca-add.component';
import { AcercaUpdateComponent } from './components/acerca-de/acerca-update/acerca-update.component';






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
    EducacionItemComponent,
    SkillsComponent,
    ProyectosComponent,
    AddItemEduComponent,
    UpdateItemEduComponent,
    AcercaAddComponent,
    AcercaUpdateComponent,
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
