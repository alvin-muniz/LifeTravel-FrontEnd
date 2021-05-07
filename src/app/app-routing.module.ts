import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {HomeComponent} from './home/home.component';
import {CitiesComponent} from './cities-module/cities/cities.component';
import {PostComponent} from './cities-module/post/post.component';
import {PostDetailComponent} from './cities-module/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'cities/:cityId/post', component: CitiesComponent },
  { path: 'cities/:cityId/post/:id', component: PostDetailComponent},
  { path: 'cities', component: CitiesComponent },
  { path: 'cities/:cityId', component: CitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
