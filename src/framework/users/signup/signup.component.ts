import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { UserApi } from 'framework/users/user-api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private _fb: FormBuilder, private _userApi: UserApi) { }

  ngOnInit() {
    this.signupForm = this._fb.group({
      firstname: ['Deepu', Validators.required],
      lastname: ['Nair', Validators.required],
      email: ['deepu105045@gmail.com ', Validators.required],
      username: ['deepu105045', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  registerUser() {
    const profile = {
      firstname : this.signupForm.controls.firstname.value,
      lastname : this.signupForm.controls.lastname.value,
      email : this.signupForm.controls.email.value,
      username : this.signupForm.controls.username.value,
      password : this.signupForm.controls.password.value
    };

    this._userApi.createUser(profile).subscribe(data => {
      console.log('User created successfully.' + data);
    }, (err) => {
      console.log('User creation error ' + err);
    });
  }
}
