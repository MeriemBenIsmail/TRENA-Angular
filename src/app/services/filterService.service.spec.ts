import { TestBed } from '@angular/core/testing';

import { FilterService } from './filterService.service';

describe('filterServiceService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
