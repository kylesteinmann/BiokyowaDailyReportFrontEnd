import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractionComponent } from './extraction/extraction.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: 'extraction', component: ExtractionComponent },
  { path: '', component: ExtractionComponent },
  { path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
