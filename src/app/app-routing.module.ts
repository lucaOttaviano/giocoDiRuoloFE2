import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePngComponent } from './create-png/create-png.component';
import { DrawComponent } from './draw/draw.component';

const routes: Routes = [
  {path: '', redirectTo: 'landingPage', pathMatch: 'full'},
  {path: 'landingPage', component: CreatePngComponent},
  {path: 'draw', component: DrawComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
