import { AppConfigService } from './app-config.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


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

  it('should return empty array from response when there is error', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(throwError('errorResponse'));
    service.getCities().subscribe((response) => {
      expect(response).toEqual([]);
      done();
    })
  });

});

