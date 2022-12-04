import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/exp/expriencia/add-item/add-item.component'; 
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateItemComponent } from './components/exp/expriencia/update-item/update-item.component';
import { AdminGuard } from './guards/admin.guard';
import { GuestGuard } from './guards/guest.guard';
import { AddItemEduComponent } from './components/educacion/add-item-edu/add-item-edu.component';
import { UpdateItemEduComponent } from './components/educacion/update-item-edu/update-item-edu.component';

const routes: Routes = [
  {path: 'Portfolio', component: HomeComponent /*, canActivate: [GuestGuard]*/},

  {path: 'Portfolio/add-item-exp', component: AddItemComponent, canActivate: [AdminGuard]},

  {path: 'Portfolio/update-item-exp/:id', component: UpdateItemComponent, canActivate: [AdminGuard]},

  {path: 'Portfolio/add-item-edu', component: AddItemEduComponent},

  {path: 'Portfolio/update-item-edu/:id', component: UpdateItemEduComponent},

  {path: 'login', component: LoginComponent},

  {path: '', redirectTo: 'Portfolio', pathMatch: 'full' },

  {path: '**', redirectTo: 'Portfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
