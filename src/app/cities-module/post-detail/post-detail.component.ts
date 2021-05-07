import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

  post: any;
  city: any;
  cityId: number;
  id: number;

  constructor(private postService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cityId = +params.get('cityId');
      this.id = +params.get('id');
      console.log("this should be the route id" + this.id);
    }
    );
    this.city = this.postService.getCityById(this.cityId);
    this.post = this.postService.getPostById(this.city, this.id);

  }

}
