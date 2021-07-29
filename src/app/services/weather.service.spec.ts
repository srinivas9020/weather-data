import { WeatherService } from './weather.service';
import { CURRENT_WEATHER_DATA, EXPECTED_WEATHER_DATA } from './mocks/weather.mock';
import { of } from 'rxjs';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };
  let appConfigServiceSpy: { getCities: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(httpClientSpy as any, appConfigServiceSpy as any);  
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return current weather data for selected city', (done:DoneFn) => {
    httpClientSpy.get.and.returnValue(of(CURRENT_WEATHER_DATA));
    service.getCurrentWeatherData('London').subscribe((response) => {
      expect(response).toEqual(EXPECTED_WEATHER_DATA);
      done();
    })
  });

});
