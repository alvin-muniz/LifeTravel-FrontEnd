import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less']
})
export class CitiesComponent implements OnInit {

  cities: string[] = [
    'Murphysboro',
    'Alpharetta',
    'Greensburg',
    'Mobile'
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
