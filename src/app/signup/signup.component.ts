import { Component, OnInit } from '@angular/core';
import { AngularFireModule, FirebaseAppProvider } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//import {movein, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  //animations: [moveIn(), fallIn()],
  //host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.password, formData.value.password)
      .then(
        (success) =>{
          console.log(success);
          this.router.navigate(['/login'])
        }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          })
      }
  }
  ngOnInit() {
  }

}
