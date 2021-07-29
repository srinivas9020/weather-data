import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  forecastData$: any;
  city: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
    ) { 
      this.city = '';
    }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.city = params.city;
      this.forecastData$ = this.weatherService.getFiveDaysForCast(this.city);
    });
  }
  

}
