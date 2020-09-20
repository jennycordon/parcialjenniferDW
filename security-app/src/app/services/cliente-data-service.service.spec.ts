import { TestBed } from '@angular/core/testing';

import { ClienteDataServiceService } from './cliente-data-service.service';

describe('ClienteDataServiceService', () => {
  let service: ClienteDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
