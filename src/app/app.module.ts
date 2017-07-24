import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routing/app.routing';
import { AppComponent } from './app.component';
import { FrameworkModule } from '../framework/framework.module';
import { WelcomeCarouselComponent } from './welcome-carousel/welcome-carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user-service/user.service';
import { UserApi } from '../framework/users/user-api';
import { AuthGuard } from './services/auth-guard/auth-guard.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from 'environments/firebase.config';
import { FirebaseService } from './services/firebase/firebase.service';
import { PredictionBoardComponent } from './prediction-board/prediction-board.component';
import { GameSchedulerComponent } from './game-scheduler/game-scheduler.component';
import { IplTeamDropdownComponent } from './shared/ipl-team-dropdown/ipl-team-dropdown.component';
import { ResultsComponent } from './results/results.component';
import { TournamentSettingsComponent } from './tournament-settings/tournament-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeCarouselComponent,
    AuthenticatedUserComponent,
    DashboardComponent,
    PredictionBoardComponent,
    GameSchedulerComponent,
    IplTeamDropdownComponent,
    ResultsComponent,
    TournamentSettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FrameworkModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    UserService,
    AuthGuard,
    FirebaseService,
    { provide: UserApi, useExisting: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
