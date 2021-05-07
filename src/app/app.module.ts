import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities-module/cities/cities.component';
import { CitiesListComponent } from './cities-module/cities/cities-list/cities-list.component';
import { CitiesDetailViewComponent } from './cities-module/cities/cities-detail-view/cities-detail-view.component';
import { CitiesListCardComponent } from './cities-module/cities/cities-list-card/cities-list-card.component';
import { HeaderPopoutMenuComponent } from './header-popout-menu/header-popout-menu.component';
import { PostComponent } from './cities-module/post/post.component';
import { PostListComponent } from './cities-module/post-list/post-list.component';
import {CitiesModule} from './cities-module/cities.module';
import {PostRoutingModule} from './cities-module/post-routing/post-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    LandingPageComponent,
    HomeComponent,
    HeaderPopoutMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CitiesModule,
    PostRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
