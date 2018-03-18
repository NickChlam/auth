import { Component, OnInit, HostBinding } from '@angular/core';
//import { NgIf } from '@angular/common';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireModule, FirebaseAppProvider } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
//import { moveIn } from '../router.animations';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;  
  constructor(public af: AngularFireAuth, private router: Router) { 

  this.af.authState.subscribe(authState => {
    if(authState) {
      this.router.navigateByUrl('/members');
    }
  });
}

loginFb() {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
          this.error = err;
        })
      }
  
  loginGoogle() {
      this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
      (success) => {
      this.router.navigate(['/members']);
      }).catch(
      (err) => {
      this.error = err;
      })
      }
  ngOnInit() {
  }

}
