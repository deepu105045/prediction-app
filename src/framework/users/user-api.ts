import { Observable } from 'rxjs/observable';

export abstract class UserApi {
    createUser: (profile) => Observable <any>;
    login: (username: string, password: string, client: string) => Observable <any>;
    logout: () => Observable <any>;
    abstract isUserLoggedIn(): boolean;
}
