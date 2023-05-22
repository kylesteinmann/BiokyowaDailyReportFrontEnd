import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractionComponent } from './Components/extraction/extraction.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FermentationComponent } from 'src/app/Components/fermentation/fermentation.component';
import { SummaryComponent } from './Components/summary/summary.component';
import { LoginComponent } from './auth/login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: 'extraction', component: ExtractionComponent },
  { path: '', component: ExtractionComponent },
  { path: "signup", component: SignupComponent},
  { path: 'fermentation', component: FermentationComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'login', component: LoginComponent},
  { path: 'notifications', component: NotificationsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
