import { TestBed, inject } from '@angular/core/testing';

import { RegisterdataService } from './registerdata.service';

describe('RegisterdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterdataService]
    });
  });

  it('should be created', inject([RegisterdataService], (service: RegisterdataService) => {
    expect(service).toBeTruthy();
  }));
});
