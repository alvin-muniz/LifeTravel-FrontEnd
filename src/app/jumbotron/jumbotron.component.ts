import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.less']
})
export class JumbotronComponent implements OnInit {

  constructor(private dataService: DataService) { }

  searchCityName: string;

  findCity(cityName: any) {
      console.log(this.dataService.cities);
      if ( isNaN( cityName))
      {
          for(const city of this.dataService.cities)
          {
            if(city.name === cityName)
            {
              console.log(cityName, 'exists');
            }else {
              console.log(cityName, 'doesNotExist');
            }
          }
      } else {
        for ( const city of this.dataService.cities )
        {
          if (city.zip === cityName)
          {
            console.log('zip code exists');
          } else {
            console.log('zip code does not exists');
          }
        }
      }
  }

  ngOnInit(): void {
  }

}
