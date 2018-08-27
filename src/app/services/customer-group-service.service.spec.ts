import { TestBed, inject } from '@angular/core/testing';

import { CustomerGroupServiceService } from './customer-group-service.service';

describe('CustomerGroupServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerGroupServiceService]
    });
  });

  it('should be created', inject([CustomerGroupServiceService], (service: CustomerGroupServiceService) => {
    expect(service).toBeTruthy();
  }));
});
