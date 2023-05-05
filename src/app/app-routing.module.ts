import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagingComponent } from './packaging/packaging.component';

const routes: Routes = [
  { path: 'packaging', component: PackagingComponent },
  { path: '', component: PackagingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
