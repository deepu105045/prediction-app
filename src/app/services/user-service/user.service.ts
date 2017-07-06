import { Injectable } from '@angular/core';
import { UserApi } from '../../../framework/users/user-api';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class UserService implements UserApi {

    isAuthenticated = false;
    user: Observable<firebase.User>;
    error: any;
    constructor(public afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }

    isUserLoggedIn(): boolean {
        return this.isAuthenticated;
    }

    createUser(username, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(username,password).then((data)=>{
            console.log('User created successfuly.');
        },((err)=>{
            console.log("User creation error ");
        }));
        return Observable.of({});
    }


    login(username, password, loginClient: String): Observable<any> {
        this.afAuth.auth.signInWithEmailAndPassword(username, password)
            .then((data) => {
                this.isAuthenticated = true;
                this.router.navigate(['/authenticated/dashboard']);
            }).catch((err) => {
                this.isAuthenticated = false;
                this.error = err;
            });
        return this.afAuth.authState;
    }

    logout(): Observable<any> {
        this.afAuth.auth.signOut().then((data) => {
            this.isAuthenticated = false;
            this.router.navigate(['/sign-in']);
        });
        return this.afAuth.authState;
    }

    // loginGoogle() {
    //     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    //         .then((success) => {
    //             this.isAuthenticated = true;
    //             this.router.navigate(['/authenticated/dashboard']);
    //         }).catch((err) => {
    //             this.error = err;
    //         });
    //     return this.afAuth.authState;
    // }

    // loginFb() {
    //     this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
    //         .then((success) => {
    //             this.isAuthenticated = true;
    //             this.router.navigate(['/authenticated/dashboard']);
    //         }).catch((err) => {
    //             this.error = err;
    //         });
    //     return this.afAuth.authState;
    // }

}
