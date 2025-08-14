import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  // If your AuthService exposes a getter, DON'T call it like a function.
  // Use `auth.isLoggedIn` (no parentheses). If it’s a method, keep ().
  const loggedIn = typeof (auth as any).isLoggedIn === 'function'
    ? (auth as any).isLoggedIn()
    : (auth as any).isLoggedIn;

  return loggedIn ? true : router.parseUrl('/login'); // ✅ return UrlTree
};