import { TestBed, inject } from '@angular/core/testing';

import { HomedataService } from './homedata.service';

describe('HomedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomedataService]
    });
  });

  it('should be created', inject([HomedataService], (service: HomedataService) => {
    expect(service).toBeTruthy();
  }));
});
