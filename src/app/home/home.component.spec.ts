import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../services/weather.service';

import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherServiceStub;

  beforeEach(async () => {
    weatherServiceStub = {
      getDataForCities : () => {}
    }
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{provide: WeatherService, useValue: weatherServiceStub}],
      schemas : [
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
});
