import { TestBed, inject } from '@angular/core/testing';

import { BilldataService } from './billdata.service';

describe('BilldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BilldataService]
    });
  });

  it('should be created', inject([BilldataService], (service: BilldataService) => {
    expect(service).toBeTruthy();
  }));
});
