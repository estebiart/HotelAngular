import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent}from './components/list/list.component';
import {FormComponent}from './components/form/form.component';
import { HotelComponent } from './components/hotel/hotel.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/hoteles',
    pathMatch:'full'
  },
  {
    path: 'hoteles',
    component:ListComponent
  },
  {
    path:'hoteles/add',
    component:FormComponent
  },
  {
    path:'hoteles/edit/:id',
    component:FormComponent
  },
  {
    path:'hoteles/:id',
    component:HotelComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
