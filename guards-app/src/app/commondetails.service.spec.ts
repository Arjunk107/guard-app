import { TestBed } from '@angular/core/testing';

import { CommondetailsService } from './commondetails.service';

describe('CommondetailsService', () => {
  let service: CommondetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommondetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
