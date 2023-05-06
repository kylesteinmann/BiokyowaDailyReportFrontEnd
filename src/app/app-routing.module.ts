import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractionComponent } from './Components/extraction/extraction.component';
import { AppComponent } from './app.component';
import { FermentationComponent } from 'src/app/Components/fermentation/fermentation.component';

const routes: Routes = [
  { path: 'extraction', component: ExtractionComponent },
  { path: 'fermentation', component: FermentationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
