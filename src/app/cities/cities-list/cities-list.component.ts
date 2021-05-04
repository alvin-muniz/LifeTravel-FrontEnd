import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.less']
})
export class CitiesListComponent implements OnInit {

  @Input() cities: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
