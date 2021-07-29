import { AppConfigService } from './app-config.service';
import { of } from 'rxjs';


describe('AppConfigService', () => {
  let service: AppConfigService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AppConfigService(httpClientSpy as any);  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pluck cities from response', (done: DoneFn) => {
    const expectedData = ['London','Rome'];
    const mockData = {cities: expectedData};
    httpClientSpy.get.and.returnValue(of(mockData));
    service.getCities().subscribe((response) => {
      expect(response).toEqual(expectedData);
      done();
    })
  });

});

