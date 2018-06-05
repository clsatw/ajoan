import { TestBed, inject } from '@angular/core/testing';

import { Services\utilsService } from './services\utils.service';

describe('Services\utilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services\utilsService]
    });
  });

  it('should be created', inject([Services\utilsService], (service: Services\utilsService) => {
    expect(service).toBeTruthy();
  }));
});
