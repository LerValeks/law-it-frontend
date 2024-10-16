import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AsyncPipe, NgIf} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatAnchor,
    MatButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  displayName$: Observable<string | null>;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
    this.displayName$ = this.userService.displayName$;
  }


  logout(): void {
    this.authService.logout()
    this.router.navigate(['/'])
  }

}
