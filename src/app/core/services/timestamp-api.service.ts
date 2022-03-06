import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimestampApiService {
  api = 'http://worldtimeapi.org/api';

  constructor(private httpClient: HttpClient) { }

  getTimeZone(): Observable<any> {
    return this.httpClient.get(`${this.api}/timezone`);
  }
  
  getTimeStamp(timeZone: string): Observable<any> {
    return this.httpClient.get(`${this.api}/timezone/${timeZone}`);
  }
}
