import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  post = {
    username: 'John',
    content: 'I had a great trip',
    date: '01-22-20',
    photo: 'imageURL'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
