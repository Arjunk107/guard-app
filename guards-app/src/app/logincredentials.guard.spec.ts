import { TestBed } from '@angular/core/testing';

import { LogincredentialsGuard } from './logincredentials.guard';

describe('LogincredentialsGuard', () => {
  let guard: LogincredentialsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogincredentialsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
