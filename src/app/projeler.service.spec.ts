import { TestBed } from '@angular/core/testing';

import { ProjelerService } from './projeler.service';

describe('ProjelerService', () => {
  let service: ProjelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
