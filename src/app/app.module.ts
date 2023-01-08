import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
