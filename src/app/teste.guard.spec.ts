import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { testeGuard } from './teste.guard';

describe('testeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => testeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
