import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProyectDetailsComponent } from '../proyect-details/proyect-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyect/:id', component: ProyectDetailsComponent  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class HomeRoutingModule { }