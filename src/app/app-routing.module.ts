import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePngComponent } from './create-png/create-png.component';

const routes: Routes = [
  {path: '', redirectTo: 'landingPage', pathMatch: 'full'},
  {path: 'landingPage', component: CreatePngComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
