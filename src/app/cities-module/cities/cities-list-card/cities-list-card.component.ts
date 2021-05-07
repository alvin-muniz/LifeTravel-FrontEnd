import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cities-list-card',
  templateUrl: './cities-list-card.component.html',
  styleUrls: ['./cities-list-card.component.less']
})
export class CitiesListCardComponent implements OnInit {

  @Input() city: any;

  constructor() { }

  ngOnInit(): void {
  }

}
