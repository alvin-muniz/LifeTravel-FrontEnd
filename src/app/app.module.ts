import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { CitiesDetailViewComponent } from './cities/cities-detail-view/cities-detail-view.component';
import { CitiesListCardComponent } from './cities/cities-list/cities-list-card/cities-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    LandingPageComponent,
    HomeComponent,
    CitiesComponent,
    CitiesListComponent,
    CitiesDetailViewComponent,
    CitiesListCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
