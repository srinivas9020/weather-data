import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';
import { Weather } from '../services/models/weather-widget.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities$: Observable<Weather[]> | undefined;

  constructor(
    private weatherService: WeatherService) { 
    }

  ngOnInit(): void {
    this.cities$ = this.weatherService.getDataForCities();
  }

}
