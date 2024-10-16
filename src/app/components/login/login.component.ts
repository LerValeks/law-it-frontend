import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  loginGoogle() {
    console.log("Pressed login google");
    this.authService.loginGoogle()
      .then(() => {
        alert("Login successful");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Didn't work");
      });
  }

  loginFacebook() {
    console.log("Pressed login facebook")
    this.authService.loginFacebook().then(r => alert("Facebook Requires App to be Registered. Thus stays for later implementation"));
  }

  loginEmail() {
    console.log("Pressed login facebook")
    this.authService.loginEmail().then(r => alert("Didn't work"));
  }
}
