import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less']
})
export class CitiesComponent implements OnInit {

  // will be refactored through a service
  cities: any[] = [
    {
      name: 'Murphysboro',
      state: 'Alabama',
      landmark: 'Museum of Bama',
      zip: '38299',
      posts: [{
        postOne: {
          username: 'John',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
        },
        postTwo: {
          username: 'Joeseph',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
        }
      }]
    },
    {
      name: 'Alpharetta',
      state: 'Georgia',
      landmark: 'Museum of Bama',
      zip: '38299',
      posts: [{
        postOne: {
          username: 'John',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
        },
        postTwo: {
          username: 'Joeseph',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'imageURL'
        }
      }]
    }
  ];

  selectedCity: any;
  selectedPosts: any[];

  setSelectedCity(city: any): void {
    this.selectedCity = city;
    this.selectedPosts = city.posts;
    // console.log(city.posts);
    // console.log(this.selectedPosts);
    // for (const post of this.selectedPosts) {
    //   console.log(post);
    // }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
