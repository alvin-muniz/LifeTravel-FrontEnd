import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less']
})
export class CitiesComponent implements OnInit{

  // will be refactored through a service
  cities: any[] = [
    {
      id: 1,
      name: 'Murphysboro',
      state: 'Alabama',
      landmark: 'Museum of Bama',
      zip: '38299',
      posts: [{
          id: 1,
          username: 'John',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
        },
         {
          id: 2,
          username: 'Joeseph',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
      }]
    },
    {
      id: 2,
      name: 'Alpharetta',
      state: 'Georgia',
      landmark: 'Museum of Bama',
      zip: '38299',
      posts: [{
          id: 1,
          username: 'Betty',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
        },
        {
          id: 2,
          username: 'Jonathan',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
      }]
    }
  ];

  selectedCity: any;
  selectedPosts: any[];

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: number;
    this.route.paramMap.subscribe((params: ParamMap) => {
        id = +params.get('cityId');
        console.log("this should be the route id" + id);
      }
    );
    this.setCityById(id);
    console.log(this.selectedCity);
  }

  setSelectedCity(city: any): void {
    this.selectedCity = city;
    this.selectedPosts = city.posts;
  }

  setCityById(id: number): void {
    for (const city of this.cities) {
      if (city.id === id) {
         this.setSelectedCity(city);
      }
    }
  }






}
