// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StronaComponent } from './strona/strona.component';
import { Strona2Component } from './strona2/strona2.component';
import { Strona3Component } from './strona3/strona3.component';
import { HomeComponent } from './home/home.component';

// Definicja tras (routes) aplikacji
const routes: Routes = [
  { path: 'lem2', component: Strona3Component },
  { path: 'database', component: StronaComponent },
  { path: 'form', component: Strona2Component },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default redirect to /home
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
