import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  @Input() posts: any[];
  @Input() city: any;

  searchContent: string;
  foundContent: any[] = new Array();

  cityId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.posts);
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.cityId = +params.get('cityId');
        console.log("this should be the route id" + this.cityId);
      }
    );
  }

  resetPosts() {
    this.posts = this.city.posts;
  }

  findContent(searchString: string): void {
    if (searchString.length > 3) {
      for (const post of this.posts) {
        if (post.content.includes(searchString)) {
          this.foundContent.push(post);
        }
      }
      this.posts = this.foundContent;
    } else if (searchString.length===0 || searchString === " ") {
      this.foundContent = [];
      this.resetPosts();
    }

  }

}
