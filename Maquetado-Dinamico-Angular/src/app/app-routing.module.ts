import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';

const routes: Routes = [
  {path: 'Portfolio', component: HomeComponent},

  {path: '', redirectTo: 'Portfolio', pathMatch: 'full' },

  {path: 'Portfolio/add-item', component: AddItemComponent},

  {path: 'Portfolio/update-item/:id', component: UpdateItemComponent},

  {path: '**', redirectTo: 'Portfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
