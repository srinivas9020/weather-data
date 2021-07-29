import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherService } from '../services/weather.service';

import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherServiceStub;

  const weatherData = [
    {
      cityName: "London",
      temparature: 292.41,
      sunsetTime: 1627502124,
      sunriseTime: 1627445901,
      timezone: 3600
    }
  ]

  beforeEach(async () => {
    weatherServiceStub = {
      getDataForCities: () => {
        return of(weatherData)
      }
    }
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceStub }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the cities', (done: DoneFn) => {
    component.cities$?.subscribe((data) => {
      expect(data).toEqual(weatherData);
      done();
    })
  });
});
