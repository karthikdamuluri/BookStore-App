import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { BookListComponent, DialogResultExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

import { AddBookService } from './services/add-book.service';
import { LoginService } from './services/login.service';
import { UploadImageService } from './services/upload-image.service';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { RemoveBookService } from './services/remove-book.service';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import {MatGridListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import {MatSlideToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

import 'hammerjs';
import { EditBookComponent } from './components/edit-book/edit-book.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogResultExampleDialog
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
    MatSelectModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService,
    RemoveBookService
  ],
  bootstrap: [AppComponent, DialogResultExampleDialog]
})
export class AppModule { }
