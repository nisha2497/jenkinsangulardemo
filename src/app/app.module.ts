import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { UserService } from 'src/service/userservice';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './Book/book.component';
import { BookService } from 'src/service/bookservice';
import { BookTableComponent } from './Book/booktable/btab.component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,BookComponent,BookTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [UserService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
