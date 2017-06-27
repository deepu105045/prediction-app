import { Routes } from '@angular/router';
import { WelcomeCarouselComponent } from '../welcome-carousel/welcome-carousel.component';
import { SigninComponent } from '../../framework/users/sign-in/sign-in.component';
import { SignupComponent } from '../../framework/users/signup/signup.component';
import { AuthenticatedUserComponent } from '../authenticated-user/authenticated-user.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../services/auth-guard.service';

export const appRoutes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'sign-in', component:SigninComponent},
    { path: 'signup', component : SignupComponent},
    { 
        path :'authenticated', component: AuthenticatedUserComponent,canActivate: [AuthGuard],
        children: [
            { path: 'dashboard' ,component:DashboardComponent}
        ]
    }
];