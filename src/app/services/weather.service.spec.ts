import { WeatherService } from './weather.service';
import { CURRENT_WEATHER_DATA, EXPECTED_WEATHER_DATA, 
    FORECAST_DATA, EXPECTED_FORECAST_DATA } from './mocks/weather.mock';
import { of } from 'rxjs';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };
  let appConfigServiceSpy: { getCities: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    appConfigServiceSpy = jasmine.createSpyObj('AppConfigService', ['getCities']);
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

  it('should fetch weather data for selected cities', (done:DoneFn) => {
    httpClientSpy.get.and.returnValue(of(CURRENT_WEATHER_DATA));
    appConfigServiceSpy.getCities.and.returnValues(of(['London']));
    service.getDataForCities().subscribe((response) => {
      expect(response).toEqual([EXPECTED_WEATHER_DATA]);
      done();
    })
  });

  it('should fetch forecast data for selected city', (done:DoneFn) => {
    httpClientSpy.get.and.returnValue(of(FORECAST_DATA));
    service.getFiveDaysForCast('London').subscribe((response) => {
      expect(response).toEqual(EXPECTED_FORECAST_DATA);
      done();
    })
  });

});
