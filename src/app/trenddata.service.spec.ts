import { TestBed, inject } from '@angular/core/testing';

import { TrenddataService } from './trenddata.service';

describe('TrenddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrenddataService]
    });
  });

  it('should be created', inject([TrenddataService], (service: TrenddataService) => {
    expect(service).toBeTruthy();
  }));
});
