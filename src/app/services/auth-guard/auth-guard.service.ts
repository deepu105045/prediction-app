import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '.././user-service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    isLoggedIn: boolean;
    constructor(private userService: UserService, private router: Router) { }
    canActivate(): boolean {
        return this.userService.isUserLoggedIn();
    }
}
// @Injectable()
// export class AuthGuard implements CanActivate{
//     constructor(private userService:UserService,private router:Router){}
//     canActivate():Observable<boolean>{
//         console.log('Auth Guard called' + this.userService.isUserLoggedIn());
//         if(!this.userService.isUserLoggedIn()){
//             this.router.navigate['/signin'];
//         }
//         //return this.userService.afAuth.authState.map(authState => !!authState.uid);
//         return this.userService.isAuthenticated();
//     }

// }
