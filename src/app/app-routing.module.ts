import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractionComponent } from './Components/extraction/extraction.component';
import { FermentationComponent } from 'src/app/Components/fermentation/fermentation.component';
import { SummaryComponent } from './Components/summary/summary.component';

const routes: Routes = [
  { path: 'extraction', component: ExtractionComponent },
  { path: 'fermentation', component: FermentationComponent },
  { path: 'summary', component: SummaryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
