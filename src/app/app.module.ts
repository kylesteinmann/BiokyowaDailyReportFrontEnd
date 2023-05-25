import { ExtractionComponent } from './Components/extraction/extraction.component';
import { ExtractionDialogComponent } from './Components/extraction-dialog/extraction-dialog.component';
import { AppComponent } from './app.component';
import { PackagingComponent } from './Components/packaging/packaging.component';
import { FermentationComponent } from './Components/fermentation/fermentation.component';
import { FermentationDialogComponent } from './Components/fermentation-dialog/fermentation-dialog.component';
import { PackagingDialogComponent } from './Components/packaging-dialog/packaging-dialog.component';
import { SummaryComponent } from './Components/summary/summary.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';

import { NgModule } from '@angular/core';
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
import { SignupComponent } from './auth/signup/signup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { NgChartsModule } from 'ng2-charts';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ExtractionComponent,
    ExtractionDialogComponent,
    PackagingComponent,
    FermentationComponent,
    FermentationDialogComponent,
    PackagingDialogComponent,
    SummaryComponent,
    LoginComponent,
    NotificationsComponent,
    HeaderComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
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
    NgChartsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
