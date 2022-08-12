import { TestBed } from '@angular/core/testing';

import { FeaturedActsService } from './featured-acts.service';

describe('FeaturedActsService', () => {
  let service: FeaturedActsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedActsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
