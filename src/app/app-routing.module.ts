import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordLayoutComponent } from './layouts/app-admin-layouts/dashbord-layout/dashbord-layout.component';
import { LoginLayoutComponent } from './layouts/app-admin-layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/app-layouts/main-layout/main-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/administration/authenticated/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashbordLayoutComponent,

    children: [
      {
        path: '',
        loadChildren: () => import('./pages/administration/authenticated/authenticated.module').then(m => m.AuthenticatedModule)
      }
    ]
  },

  {
    path: 'admin',
    component: LoginLayoutComponent,

    children: [
      {
        path: '',
        loadChildren: () => import('./pages/administration/public/public.module').then(m => m.PublicModule)
      }
    ]
  },

  {
    path: '',
    component: MainLayoutComponent,

    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      {
        path: 'work',
        loadChildren: () => import('./pages/work/work.module').then(m => m.WorkModule)
      },
      { path: 'services', component: ServicesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
