import { TestBed } from '@angular/core/testing';

import { SectionServiceService } from './section-service.service';

describe('SectionServiceService', () => {
  let service: SectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
