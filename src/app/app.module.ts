import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Validator } from 'class-validator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Validator],
  bootstrap: [AppComponent]
})
export class AppModule { }
