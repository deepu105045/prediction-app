import { Routes } from '@angular/router';
import { WelcomeCarouselComponent } from '../welcome-carousel/welcome-carousel.component';
import { SigninComponent } from '../../framework/users/sign-in/sign-in.component';
import { SignupComponent } from '../../framework/users/signup/signup.component';
import { AuthenticatedUserComponent } from '../authenticated-user/authenticated-user.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../services/auth-guard/auth-guard.service';
import { PredictionBoardComponent } from 'app/prediction-board/prediction-board.component';
import { GameSchedulerComponent } from 'app/game-scheduler/game-scheduler.component';
import { ResultsComponent } from 'app/results/results.component';
import { TournamentSettingsComponent } from 'app/tournament-settings/tournament-settings.component';

export const appRoutes: Routes = [

    { path: 'sign-in', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'welcome', component: WelcomeCarouselComponent },
    {
        // path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
           path: 'authenticated', component: AuthenticatedUserComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'game-scheduler', component: GameSchedulerComponent },
            { path: 'update-results', component: ResultsComponent },
            { path: 'prediction-board/:id', component: PredictionBoardComponent},
            { path: 'tournament-settings', component: TournamentSettingsComponent}
        ]
    }
    ,{ path: '', redirectTo: '/sign-in', pathMatch: 'full' }
    ,{ path: '**', redirectTo: '/sign-in', pathMatch: 'full' }

];
