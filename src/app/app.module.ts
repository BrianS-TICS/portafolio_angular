
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { KnowledgeCardComponent } from './components/knowledge-card/knowledge-card.component';
import { RouterModule } from '@angular/router';

import { ProyectDetailsComponent } from './pages/proyect-details/proyect-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProyectLayoutComponent } from './layouts/proyect-layout/proyect-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    KnowledgeCardComponent,
    ProyectDetailsComponent,
    MainLayoutComponent,
    ProyectLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
