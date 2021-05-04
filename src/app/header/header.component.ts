import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  links: string[] = [
    'home',
    'cities'
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
