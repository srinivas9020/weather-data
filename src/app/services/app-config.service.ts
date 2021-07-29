import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<string []>{
    return this.http.get('assets/app.config.json').pipe(
      pluck('cities')
    )
  }
}
