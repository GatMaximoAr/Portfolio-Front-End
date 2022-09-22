import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { AdminGuard } from './guards/admin.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  {path: 'Portfolio', component: HomeComponent, canActivate: [GuestGuard]},

  {path: 'Portfolio/add-item', component: AddItemComponent, canActivate: [AdminGuard]},

  {path: 'Portfolio/update-item/:id', component: UpdateItemComponent, canActivate: [AdminGuard]},

  {path: 'login', component: LoginComponent},

  {path: '', redirectTo: 'Portfolio', pathMatch: 'full' },

  {path: '**', redirectTo: 'Portfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
