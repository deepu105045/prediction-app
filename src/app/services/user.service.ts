import { Injectable } from '@angular/core';
import { UserApi } from '../../framework/users/user-api';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService implements UserApi {
  isAuthenticated = false;
  constructor() { }
     signIn(username:string,Password:string):Observable<any>{
        this.isAuthenticated=true;
        return Observable.of({});
    }
}
