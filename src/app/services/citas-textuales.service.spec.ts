import { TestBed } from '@angular/core/testing';

import { CitasTextualesService } from './citas-textuales.service';

describe('CitasTextualesService', () => {
  let service: CitasTextualesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasTextualesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
