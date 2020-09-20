import { TestBed } from '@angular/core/testing';

import { FacturaDataServiceService } from './factura-data-service.service';

describe('FacturaDataServiceService', () => {
  let service: FacturaDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
