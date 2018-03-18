import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//import {movein, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  //animations: [moveIn(), fallIn()],
  //host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
   }
   
   onSubmit(formData) {
     if(formData.valid){
       console.log(formData.value);
       this.af.auth.createUserAndRetrieveDataWithEmailAndPassword(formData.value.email, FormData.value.password)
       .then(
         (success) => {
           console.log(success);
           this.router.navigate(['/members']);

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
