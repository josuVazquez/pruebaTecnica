import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class TimestampApiService {
  constructor(private httpClient: HttpClient) { }

  getTimeZone(): Observable<any> {
    return this.httpClient.get(`${environment.backEndUrl}/timezone`);
  }
  
  getTimeStamp(timeZone: string): Observable<any> {
    return this.httpClient.get(`${environment.backEndUrl}/timezone/${timeZone}`);
  }
}
