import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { routing } from './app.routing';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule, MatGridListModule, MatInputModule} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
