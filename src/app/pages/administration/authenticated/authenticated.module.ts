import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { ProyectsComponent } from './proyects/proyects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { QuotesComponent } from './quotes/quotes.component';


@NgModule({
  declarations: [
    ProyectsComponent,
    TechnologiesComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticatedModule { }
