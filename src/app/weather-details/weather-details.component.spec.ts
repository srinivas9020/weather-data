import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherService } from '../services/weather.service'
import { of } from 'rxjs';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  let weatherServiceStub;
  
  


  beforeEach(async () => {
    weatherServiceStub = {
      getFiveDaysForCast : () => {}
    }
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetailsComponent ],
      imports: [RouterModule.forRoot([])],
      providers: [{provide: WeatherService, useValue: weatherServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
