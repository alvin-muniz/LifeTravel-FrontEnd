import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.less']
})
export class CitiesListComponent implements OnInit {

  @Input() cities: any[];
  @Output() selectedCity = new EventEmitter<any>() ;

  get message(): string { return `Cities: ${this.cities.length}`; }

  constructor() { }

  ngOnInit(): void {
  }

  selectCity(city: any): void {
    this.selectedCity.emit(city);
  }



}
