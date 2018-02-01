import { TestBed, inject } from '@angular/core/testing';

import { CartdataService } from './cartdata.service';

describe('CartdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartdataService]
    });
  });

  it('should be created', inject([CartdataService], (service: CartdataService) => {
    expect(service).toBeTruthy();
  }));
});
