import { Observable } from 'rxjs/observable';

export abstract class UserApi{
    login:(username : string,password : string ,client:string) => Observable<any>;
    logout:() => Observable<any>;
    abstract isUserLoggedIn():boolean;
    createUser:(username: string,password: string) => Observable<any>;
}