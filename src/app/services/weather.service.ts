import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { Weather } from './models/weather-widget.model'
import { forkJoin, Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService) {}
   
  getCurrentWeatherData(city: string): Observable<Weather> {
    return this.http.get<any>(`${this.buildUrl()}/weather?q=${city}&appid=${environment.appId}&units=metric`).pipe(
      map((response) => {
        return {
          cityName: response.name,
          temparature: response.main.temp,
          sunsetTime: response.sys.sunset,
          sunriseTime: response.sys.sunrise,
          timezone: response.timezone
        }
      })
    );
  }

  getDataForCities(): Observable<Weather[]>{
    return this.appConfigService.getCities().pipe(
      mergeMap((cities: string[]) => {
        return forkJoin(cities.map((city) => this.getCurrentWeatherData(city)));
      })
    )
  }

  getFiveDaysForCast(city: string){
    return this.http.get<any>(`${this.buildUrl()}/forecast?q=${city}&appid=${environment.appId}&units=metric`)
    .pipe(
      map((response: any) => {
         return response.list.map((foreCast: any) => {
               return {
                  seaLevel: foreCast.main.sea_level,
                  temparature: foreCast.main.temp,
                  dt_txt: foreCast.dt_txt
                }
               
        })
      }),
      map((mappedResponse) => {
        return mappedResponse.filter((dayForeCast: any) => dayForeCast.dt_txt.indexOf('09:00') !== -1);
      })
    );
  }

  private buildUrl(){
    return `http://${environment.weatherBaseUrl}`;
  }
}
