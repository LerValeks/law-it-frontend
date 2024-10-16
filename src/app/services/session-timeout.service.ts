import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service'; // Adjust the import path accordingly

@Injectable({
  providedIn: 'root'
})
export class SessionTimeoutService {
  private timeoutId: any;
  private readonly timeoutDuration = 30 * 60 * 1000; // 30 minutes

  constructor(private router: Router, private authService: AuthService, private ngZone: NgZone) {
    this.startMonitoring();
  }

  private startMonitoring() {
    this.resetTimer(); // Start the timer on initialization

    // Listen for user activity events
    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach(event => {
      window.addEventListener(event, () => this.resetTimer());
    });
  }

  private resetTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }


    this.timeoutId = setTimeout(() => {
      this.ngZone.run(() => {
        this.authService.logout();
        this.router.navigate(['/login']);
      });
    }, this.timeoutDuration);
  }

}
