import { TestBed, inject } from '@angular/core/testing';

import { GlobaleService } from './globale.service';

describe('GlobaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobaleService]
    });
  });

  it('should be created', inject([GlobaleService], (service: GlobaleService) => {
    expect(service).toBeTruthy();
  }));
});
