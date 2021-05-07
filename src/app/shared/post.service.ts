import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

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

  constructor() { }

  getPostById(city: any, id: number): any {
    for(const post of city.posts)
    {
      if (post.id === id) {
        return post;
      }
    }
  }

  getCityById(id: number): any {
    for (const city of this.cities) {
      if (city.id === id) {
        return city;
      }
    }
  }
}
