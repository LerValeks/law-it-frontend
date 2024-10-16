import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {NgClass} from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, NgClass, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
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



  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = null; // Reset error message

    const { email, password } = this.form.value;
    this.loading = true;

    this.authService.loginEmail(email, password)
      .then(() => {
        console.log("Login successful");
        // Handle successful login, e.g., navigate to a different page
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        // Show error message
        this.errorMessage = "Invalid email or password"; // Set error message
      })
      .finally(() => {
        this.loading = false;
      });
  }
}

