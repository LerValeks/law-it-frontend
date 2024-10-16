import {inject, Injectable} from '@angular/core';
import {Auth, user} from '@angular/fire/auth';
import {map, Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private auth = inject(Auth);

  authState$: Observable<any> = user(this.auth);

  displayName$: Observable<string | null> = this.authState$.pipe(
    map(user => {
      if (!user) {
        return null;
      }
      return user.displayName || 'Anonymous';
    })
  );


  constructor() {
  }


}
