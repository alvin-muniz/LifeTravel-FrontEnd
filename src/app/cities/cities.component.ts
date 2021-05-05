import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less']
})
export class CitiesComponent implements OnInit {

  cities: any[] = [
    {
      name: 'Murphysboro',
      zip: '38299'
    },
    {
      name: 'Murphysboro',
      zip: '38299'
    },
    {
      name: 'Murphysboro',
      zip: '38299'
    },
    {
      name: 'Murphysboro',
      zip: '38299'
    }];


  constructor() { }

  ngOnInit(): void {
  }

}
