import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from '../post/post.component';
import {PostDetailComponent} from '../post-detail/post-detail.component';
import {PostListComponent} from '../post-list/post-list.component';


const routes: Routes = [
  // {
  //   path: 'cities/:cityId',
  //   component: PostDetailComponent,
  //   outlet: 'post-detail',
  //   children: [
  //     {
  //       path: 'post/:id',
  //       component: PostComponent
  //     }
  //   ]
  //
  // }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
