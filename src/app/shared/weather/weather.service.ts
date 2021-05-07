import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  createWeatherObservable(zip): any{
    return this.http
      .get<any>(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=ffe203e68f45bbb488ed05b65cb0d682&&units=imperial`);
  }

}
