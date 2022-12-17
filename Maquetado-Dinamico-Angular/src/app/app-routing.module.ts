import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/exp/expriencia/add-item/add-item.component'; 
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateItemComponent } from './components/exp/expriencia/update-item/update-item.component';
import { AdminGuard as guard } from './guards/admin.guard';
import { AddItemEduComponent } from './components/educacion/add-item-edu/add-item-edu.component';
import { UpdateItemEduComponent } from './components/educacion/update-item-edu/update-item-edu.component';
import { AcercaAddComponent } from './components/acerca-de/acerca-add/acerca-add.component';
import { AcercaUpdateComponent } from './components/acerca-de/acerca-update/acerca-update.component';
import { ProyectoAddComponent } from './components/acordeon-skils-proyectos/proyectos/proyecto-add/proyecto-add.component';
import { ProyectoUpdateComponent } from './components/acordeon-skils-proyectos/proyectos/proyecto-update/proyecto-update.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'Portfolio', component: HomeComponent},

  {path: 'Portfolio/add-item-exp', component: AddItemComponent, canActivate: [guard], data: {expectedRol:['admin']}},

  {path: 'Portfolio/update-item-exp/:id', component: UpdateItemComponent, canActivate: [guard], data: {expectedRol:['admin']} },

  {path: 'Portfolio/add-item-edu', component: AddItemEduComponent, canActivate: [guard], data: {expectedRol:['admin']}},

  {path: 'Portfolio/update-item-edu/:id', component: UpdateItemEduComponent, canActivate: [guard], data: {expectedRol:['admin']}},

  {path: 'Portfolio/add-acerca' , component: AcercaAddComponent, canActivate: [guard], data: {expectedRol:['admin']}},

  {path: 'Portfolio/update-acerca/:id', component: AcercaUpdateComponent, canActivate: [guard], data: {expectedRol:['admin']}},

  {path: 'Portfolio/add-proyecto', component: ProyectoAddComponent, canActivate: [guard], data: {expectedRol:['admin']}},

  {path: 'Portfolio/update-proyecto/:id', component:ProyectoUpdateComponent, canActivate: [guard], data: {expectedRol:['admin']}},

  {path: 'login', component: LoginComponent},

  {path: 'singUp', component: RegistroComponent},

  {path: '', redirectTo: 'Portfolio', pathMatch: 'full' },

  {path: '**', redirectTo: 'Portfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
