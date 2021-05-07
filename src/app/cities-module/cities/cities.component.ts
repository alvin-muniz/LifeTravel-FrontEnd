import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less']
})
export class CitiesComponent implements OnInit{

  // will be refactored through a service
  cities: any[];

  selectedCity: any;
  selectedPosts: any[];

  constructor( private route: ActivatedRoute,
               private dataService: DataService) {
  }

  ngOnInit(): void {
    // load cities
    this.cities = this.dataService.cities;

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
