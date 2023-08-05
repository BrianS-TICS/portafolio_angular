
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { LanguagesComponent } from './components/languages/languages.component';
import { KnowledgeCardComponent } from './components/knowledge-card/knowledge-card.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { ProyectDetailsComponent } from './pages/proyect-details/proyect-details.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    FooterComponent,
    LanguagesComponent,
    KnowledgeCardComponent,
    ProyectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    HomeRoutingModule,
    AppRoutingModule 
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
