import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderPopoutMenuComponent} from '../header-popout-menu/header-popout-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @ViewChild(HeaderPopoutMenuComponent) menu: HeaderPopoutMenuComponent;

  links: string[] = [
    'home',
    'cities'
  ];

  constructor() { }

  ngOnInit(): void {
  }



  openMenu(e): void {
    this.menu.open(e);
  }

}
