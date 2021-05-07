import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {WeatherService} from '../../../shared/weather/weather.service';

@Component({
  selector: 'app-cities-detail-view',
  templateUrl: './cities-detail-view.component.html',
  styleUrls: ['./cities-detail-view.component.less']
})
export class CitiesDetailViewComponent implements OnInit {

  @Input() selectedCity: any;
  @Input() selectedPosts: any[];

  // weather related serach criteria

  // zip: string;
  weather: any;
  searchSubject = new Subject();


  constructor(private weatherService: WeatherService) {

  }

  findWeather(foundZip): void{
    this.searchSubject.next(foundZip);
  }

  ngOnInit(): void {
    this.searchSubject
      .subscribe(zip => {
        this.weatherService.createWeatherObservable(this.selectedCity.zip)
          .subscribe(response => this.weather = response);
      });
    this.findWeather(this.selectedCity.zip);
  }

}
