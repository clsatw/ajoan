import { TestBed, inject } from '@angular/core/testing';

import { N18iService } from './n18i.service';

describe('N18iService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [N18iService]
    });
  });

  it('should be created', inject([N18iService], (service: N18iService) => {
    expect(service).toBeTruthy();
  }));
});
