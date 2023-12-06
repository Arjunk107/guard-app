import { TestBed } from '@angular/core/testing';

import { DeactcheckGuard } from './deactcheck.guard';

describe('DeactcheckGuard', () => {
  let guard: DeactcheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactcheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
