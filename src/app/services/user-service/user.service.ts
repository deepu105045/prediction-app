import { Injectable } from '@angular/core';
import { UserApi } from '../../../framework/users/user-api';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService implements UserApi {

    isAuthenticated = false;
    user: Observable<firebase.User>;
    error: any;
    constructor(public afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router) {
            this.user = afAuth.authState;
               this.afAuth.auth.onAuthStateChanged((user) => {
                if (user) {
                    this.isAuthenticated = true;
                }else {
                    this.isAuthenticated = false;
                }
            });
    }

    isUserLoggedIn(): boolean {
        return this.isAuthenticated;
    }

    getCurrentUser() {
        return this.afAuth.auth.currentUser;
    }

    createUser(profile): Observable<any> {
        const isNewUser = true;
        this.afAuth.auth.createUserWithEmailAndPassword(profile.email, profile.password).then((data) => {
            if (data.uid && isNewUser) {
                this.db.database.ref('/users').child(data.uid).set({
                    firstname: profile.firstname,
                    lastName: profile.lastname,
                    email: profile.email
                });
                this.isAuthenticated = true;
                this.router.navigate(['/authenticated/prediction-board']);
            }
        }, ((err) => {
            console.log('USER SERVICE :: User creation error ' + err);
        }));
        return this.afAuth.authState;
    }


    login(username, password, loginClient: String): Observable<any> {
        this.afAuth.auth.signInWithEmailAndPassword(username, password)
            .then((data) => {
                console.log('User service :: login :: ', data.email);
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
}
