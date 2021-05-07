import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Input() cityId: number;

  showDetails = false;
  location: string;

  // = {
  //   username: 'John',
  //   content: 'I had a great trip',
  //   date: '01-22-20',
  //   photo: 'imageURL'
  // };

  constructor(private route: Router) {
    this.location = route.url;
  }

  ngOnInit(): void {
  }




}
