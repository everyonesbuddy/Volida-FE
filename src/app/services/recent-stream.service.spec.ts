import { TestBed } from '@angular/core/testing';

import { RecentStreamService } from './recent-stream.service';

describe('ReacentSreamService', () => {
  let service: RecentStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
