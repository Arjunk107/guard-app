import { TestBed } from '@angular/core/testing';

import { HomecheckGuard } from './homecheck.guard';

describe('HomecheckGuard', () => {
  let guard: HomecheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomecheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
