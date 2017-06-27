import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private userService:UserService,private router:Router){}
    canActivate():boolean{
        console.log('Auth#Guard called' + this.userService.isAuthenticated);
        if(!this.userService.isAuthenticated){
            console.log('no match');
            this.router.navigate['/signin'];
        }
        return this.userService.isAuthenticated;
    }

}