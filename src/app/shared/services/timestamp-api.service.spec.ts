import { TestBed } from '@angular/core/testing';

import { TimestampApiService } from './timestamp-api.service';

describe('TimestampApiService', () => {
  let service: TimestampApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimestampApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
