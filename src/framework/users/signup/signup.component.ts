import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  
  registerUser() {
    const firstname = this.signupForm.controls.firstname.value;
    const lastname = this.signupForm.controls.lastname.value;
    const email = this.signupForm.controls.email.value;
    const username = this.signupForm.controls.username;
    const password = this.signupForm.controls.password;
    const confirmPassword = this.signupForm.controls.confirmPassword;
    console.log(this.signupForm.value)
  }

}
