import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  socialLogins;
  passwordMessage: string;
  usernameMessage: string;
  errorMessage: string;
  submitting = false;

  private validationMessage = {
    required: 'This is field is required.',
    pattern: 'please enter a valid email address.',
    range: 'Please enter value between 2 and 5'
  };

constructor(private _fb: FormBuilder, private _userApi: UserApi, private router: Router) { }

  ngOnInit() {
    this.socialLogins = [
      {
        imagePath: 'assets/Sign-in-logos/sign-in-with-twitter.png',
        alt: 'twitter',
        link: 'http://www.twitter.com',
        clientName: 'twitter'
      },
      {
        imagePath: 'assets/Sign-in-logos/sign-in-with-google.png',
        alt: 'google', link: 'http://www.gmail.com',
        clientName: 'google'
      },
      {
        imagePath: 'assets/Sign-in-logos/sign-in-with-facebook.png',
        alt: 'facebook',
        link: 'http://www.facebook.com',
        clientName: 'facebook'
      }
    ];

    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    const passwordControl = this.loginForm.get('password');
    const usernameControl = this.loginForm.get('username');

    passwordControl.valueChanges.subscribe(value => {
      this.setMessage(passwordControl, 'password');
    });

    usernameControl.valueChanges.subscribe(value => {
      this.setMessage(usernameControl, 'username');
    });
  }

  setMessage(c: AbstractControl, controlName: String): void {
    this.errorMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.errorMessage = Object.keys(c.errors).map(key =>
        this.validationMessage[key]).join('');
    }
    if (controlName === 'username') {
      this.usernameMessage = this.errorMessage;
    } else if (controlName === 'password') {
      this.passwordMessage = this.errorMessage;
    }
  }

  login(clientName) {
    this.submitting = true;
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    this._userApi.login(username, password, 'emailPassword').subscribe((data) => {
      console.log('Authentication from framework service ' + data);
    }, (err) => {
      this.submitting = false;
      console.log('Login Error : ' + err);
    });
  }

}
