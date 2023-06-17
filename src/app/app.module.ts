
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/app-layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkComponent } from './pages/work/work.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { KnowledgeCardComponent } from './components/knowledge-card/knowledge-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainLayoutComponent,
    FooterComponent,
    WorkComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    LanguagesComponent,
    KnowledgeCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
