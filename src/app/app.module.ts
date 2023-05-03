import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { ExtractionComponent } from './extraction/extraction.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtractionComponent,
    FormControl,
    FormGroup,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
