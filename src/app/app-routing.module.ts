import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectDetailsComponent } from './pages/proyect-details/proyect-details.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProyectLayoutComponent } from './layouts/proyect-layout/proyect-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },
  {
    path: 'proyect/:id',
    component: ProyectLayoutComponent,
    children: [
      { path: '', component: ProyectDetailsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'top'
      }),
  ]
})
export class AppRoutingModule { }
