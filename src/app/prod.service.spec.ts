import { TestBed, inject } from '@angular/core/testing';

import { ProdService } from 'app/prod.service';

describe('ProdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdService]
    });
  });

  it('should be created', inject([ProdService], (service: ProdService) => {
    expect(service).toBeTruthy();
  }));
});
