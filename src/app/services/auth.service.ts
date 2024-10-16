
//import { GoogleAuthProvider } from 'firebase/auth'
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
  signInWithEmailAndPassword,
  authState,
  User
} from '@angular/fire/auth';
import { inject, Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private auth = inject(Auth);
  private router = inject(Router)

  get currentUser$(): Observable<User | null> {
    return authState(this.auth);
  }

  constructor() {}

  async loginGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider)
      const user = result.user; // User info
      console.log('User signed in:', user);
      const returnUrl = localStorage.getItem('returnUrl') || '/';
      this.router.navigateByUrl(returnUrl);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  async loginFacebook(): Promise<void> {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider)
      const user = result.user; // User info
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  async loginEmail(email: string, password: string ): Promise<void> {

    try {
      const result = await signInWithEmailAndPassword (this.auth, email, password)
      const user = result.user; // User info
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  }

  logout(): void {
    this.auth.signOut()
    localStorage.clear;
  }

}
