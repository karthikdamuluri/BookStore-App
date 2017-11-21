import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddBookService } from './services/add-book.service';
import { LoginService } from './services/login.service';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import {MatGridListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import {MatSlideToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    routing,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [
    LoginService,
    AddBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
