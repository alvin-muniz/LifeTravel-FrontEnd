import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {HomeComponent} from './home/home.component';
import {CitiesComponent} from './cities-module/cities/cities.component';
import {PostComponent} from './cities-module/post/post.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  // { path: 'home', component: HomeComponent },
  {path: 'post', component: PostComponent},
  { path: 'cities/:cityId/post', component: CitiesComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'cities/:cityId', component: CitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
