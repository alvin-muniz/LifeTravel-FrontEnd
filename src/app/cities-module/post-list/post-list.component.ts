import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  @Input() posts: any[];

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

}
