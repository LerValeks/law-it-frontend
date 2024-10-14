import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getMessaging, provideMessaging} from '@angular/fire/messaging';
import {environments} from '../environments/environments.prod';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideFirebaseApp(() => initializeApp(environments.firebase)), provideAuth(() => getAuth()), provideMessaging(() => getMessaging())]
};
