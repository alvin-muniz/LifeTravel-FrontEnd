import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.less']
})
export class CitiesListComponent implements OnInit {

  @Input() cities: any[];

  get message(): string { return `this list is size of ${this.cities.length}`; }

  constructor() { }

  ngOnInit(): void {
  }

}
