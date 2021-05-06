import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  @Input() posts: any[];

  constructor() { }

  ngOnInit(): void {
    for(var post of this.posts)
    {
      console.log(post);
    }
    console.log(this.posts);
  }

}
