import { TestBed } from '@angular/core/testing';

import { FreeEventsService } from './free-events.service';

describe('FreeEventsService', () => {
  let service: FreeEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
