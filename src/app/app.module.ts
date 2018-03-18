import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AngularFireModule, FirebaseAppConfigToken } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const FirebaseConfig = {
  apiKey: "AIzaSyBNsQpOeGn-pvn6Gz0sjQiEFflRTj-krkw",
  authDomain: "buggedout-33133.firebaseapp.com",
  databaseURL: "https://buggedout-33133.firebaseio.com",
  projectId: "buggedout-33133",
  storageBucket: "buggedout-33133.appspot.com",
  messagingSenderId: "566263657593"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
