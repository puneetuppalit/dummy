import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EmailPage } from '../pages/email/email';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';

import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera } from '@ionic-native/camera';

import { EmailProvider } from '../providers/email/email';
import { ImageProvider } from '../providers/image/image';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmailPage,
    WelcomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
     IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmailPage,
    WelcomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    EmailComposer,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailProvider,
    ImageProvider
  ]
})
export class AppModule {}
