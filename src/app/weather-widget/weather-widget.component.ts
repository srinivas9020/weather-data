import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  @Input() city: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
