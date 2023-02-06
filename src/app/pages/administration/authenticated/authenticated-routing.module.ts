import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TechnologiesComponent } from './technologies/technologies.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'proyects', component: ProyectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
