import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from '../post/post.component';
import {PostDetailComponent} from '../post-detail/post-detail.component';


const routes: Routes = [
  {
    path: 'cities/:cityId/post',
    component: PostComponent,
    children: [
      {
        path: ':id',
        component: PostDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
