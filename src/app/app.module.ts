import { ExtractionComponent } from './extraction/extraction.component';
import { ExtractionDialogComponent } from './extraction-dialog/extraction-dialog.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AlertModule } from './_alert';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './Components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ExtractionComponent,
    ExtractionDialogComponent
  ],
  imports: [
    BrowserModule,
    AlertModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    NgChartsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
