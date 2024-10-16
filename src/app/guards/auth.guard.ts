import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';
import {map} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currentUser$.pipe(
    map(user => {
      if (user) {
        return true; // User is authenticated, allow access
      } else {
        localStorage.setItem('returnUrl', state.url)
        router.navigate(['/login'], {queryParams:{returnUrl: state.url}})
        console.warn('Access denied - User not logged in');
        return false; // User not authenticated, deny access
      }
    })
  );
};
