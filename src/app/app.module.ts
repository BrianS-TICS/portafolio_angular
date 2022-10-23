import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewMainComponent } from './components/view-main/view-main.component';
import { ViewTwoComponent } from './components/view-two/view-two.component';
import { ViewThreeComponent } from './components/view-three/view-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewMainComponent,
    ViewTwoComponent,
    ViewThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
