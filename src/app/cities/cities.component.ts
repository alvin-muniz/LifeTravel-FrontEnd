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
      state: 'Alabama',
      landmark: 'Museum of Bama',
      zip: '38299'
    },
    {
      name: 'Murphysboro',
      state: 'Alabama',
      landmark: 'Museum of Bama',
      zip: '38299'
    }];


  constructor() { }

  ngOnInit(): void {
  }

}
