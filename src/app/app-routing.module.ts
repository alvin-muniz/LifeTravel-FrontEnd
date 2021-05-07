import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {HomeComponent} from './home/home.component';
import {CitiesComponent} from './cities-module/cities/cities.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'cities/:id', component: CitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
