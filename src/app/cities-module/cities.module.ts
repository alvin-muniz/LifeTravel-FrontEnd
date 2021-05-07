import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CitiesComponent} from './cities/cities.component';
import {CitiesDetailViewComponent} from './cities/cities-detail-view/cities-detail-view.component';
import {CitiesListComponent} from './cities/cities-list/cities-list.component';
import {CitiesListCardComponent} from './cities/cities-list-card/cities-list-card.component';
import {PostComponent} from './post/post.component';
import {PostListComponent} from './post-list/post-list.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    CitiesComponent,
    CitiesDetailViewComponent,
    CitiesListComponent,
    CitiesListCardComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CitiesComponent,
    CitiesDetailViewComponent,
    CitiesListComponent,
    CitiesListCardComponent,
    PostComponent,
    PostListComponent
  ]
})
export class CitiesModule { }
