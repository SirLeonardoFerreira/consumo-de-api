import { CanActivateFn } from '@angular/router';

export const testeGuard: CanActivateFn = (route, state) => {
  return true;
};
