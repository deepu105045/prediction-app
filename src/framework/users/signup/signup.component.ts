import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { UserApi } from "framework/users/user-api";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private _fb: FormBuilder,private _userApi: UserApi) { }

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
    const username = this.signupForm.controls.username.value;
    const password = this.signupForm.controls.password.value;
    const confirmPassword = this.signupForm.controls.confirmPassword;
    console.log(this.signupForm.value)
    this._userApi.createUser(email,password).subscribe(data=>{
      console.log('User created successfully.');
    })

  }

}
