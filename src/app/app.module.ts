
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/app-layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkComponent } from './pages/work/work.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FromContactoComponent } from './components/from-contacto/from-contacto.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NgOptimizedImage } from '@angular/common';
import { LoginComponent } from './pages/administration/public/login/login.component';
import { DashboardComponent } from './pages/administration/authenticated/dashboard/dashboard.component';
import { LoginLayoutComponent } from './layouts/app-admin-layouts/login-layout/login-layout.component';
import { DashbordLayoutComponent } from './layouts/app-admin-layouts/dashbord-layout/dashbord-layout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

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
    FromContactoComponent,
    LanguagesComponent,
    LoadingScreenComponent,
    LoginComponent,
    DashboardComponent,
    LoginLayoutComponent,
    DashbordLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
