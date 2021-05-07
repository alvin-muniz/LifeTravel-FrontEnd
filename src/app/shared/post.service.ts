import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  cities: any[] = [
    {
      id: 1,
      name: 'Opelika',
      state: 'Alabama',
      landmark: 'The old general store',
      zip: '36804',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Railroad_Avenue_Historic_District_Opelika_Alabama.JPG/1024px-Railroad_Avenue_Historic_District_Opelika_Alabama.JPG',
      posts: [{
        id: 1,
        username: 'John',
        content: 'I had a great trip',
        date: '01-22-20',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Snowboarding.jpg/1280px-Snowboarding.jpg'
      },
        {
          id: 2,
          username: 'Joeseph',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1024px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg'
        }]
    },
    {
      id: 2,
      name: 'Alpharetta',
      state: 'Georgia',
      landmark: 'Museum of Bama',
      zip: '38299',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Railroad_Avenue_Historic_District_Opelika_Alabama.JPG/1024px-Railroad_Avenue_Historic_District_Opelika_Alabama.JPG',
      posts: [{
        id: 1,
        username: 'Betty',
        content: 'I had a great trip',
        date: '01-22-20',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Snowboarding.jpg/1280px-Snowboarding.jpg'
      },
        {
          id: 2,
          username: 'Jonathan',
          content: 'I had a great trip',
          date: '01-22-20',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1024px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg'
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
