import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Tournament, Game } from 'app/game-scheduler/tournament';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user-service/user.service';

@Injectable()
export class FirebaseService {
  gameFixtures: FirebaseListObservable<any[]>;
  results: FirebaseListObservable<any>;
  tournamentRef;
  gameRef;
  predictionRef;
  resultsRef;
  teamsRef;

  constructor(private db: AngularFireDatabase , private userService: UserService) {
    this.tournamentRef = this.db.database.ref('/tournaments/');
    this.gameRef = this.db.database.ref('/games/');
    this.predictionRef= this.db.database.ref('myPredictions');
    this.resultsRef= this.db.database.ref('results');
    this.teamsRef= this.db.database.ref('teams/');
  }

  addTournament(tournament: Tournament) {
    return this.db.database.ref('/tournaments').push(tournament);
  }

  getTeams(year: string, league: string): Observable<any> {
    return this.db.list('/tournaments/' + year + '/' + league + '/teams') as FirebaseListObservable<any>;
  }


  // New Code from here

  saveTournamentDetails(tournament: Tournament) {
    const newTournamentRef = this.tournamentRef.push({
      tournamentName: tournament.tournamentName,
      year: tournament.year,
      sport: tournament.sport,
      gameFormat: tournament.gameFormat
    });

    return newTournamentRef.key;
  }

  updateTournamentDetails(tournamentId: string, games: string[]) {
    for(let i = 0; i < games.length; i++){
      this.db.database.ref('/tournaments/'+tournamentId+'/gameLineup/'+games[i]).set(true);
    }
  }

  saveGameDetails(tournamentId, games: Game[]) {
    let gameIds = [];
    for (let i = 0; i < games.length; i ++) {
      var gameId=this.gameRef.push({
        tournamentId : tournamentId,
        gameDateTime : games[i].gameDateTime,
        venue : games[i].venue,
        team1 : games[i].team1,
        team2 : games[i].team2
      }).key;
      gameIds.push(gameId);
    }
    return gameIds;
  }

  findAllGamesByTournamentId(tournamentId: string) {
    return this.db.list('/tournaments/' + tournamentId+'/gameLineup') as FirebaseListObservable<any>;
  }

  findGameById(gameId){
      return this.db.object('/games/' + gameId) as FirebaseObjectObservable<any>;
  }

  saveMyPredictions(predictions){
    let uid=this.userService.getCurrentUser().uid;
    this.predictionRef.child(uid).set(predictions);
  }

  getMyPredictions(gameId): Observable<any>{
    let uid=this.userService.getCurrentUser().uid;
    return this.db.object('/myPredictions/'+uid+'/'+ gameId) as FirebaseObjectObservable<any>;
  }

  saveResults(results){
     this.resultsRef.child('iplResults').set(results);
  }

  getResults(gameId): Observable<any>{
    return this.db.object('/results/'+'iplResults/'+ gameId) as FirebaseObjectObservable<any>;
  }

  findAllTournaments(){
      return this.db.list('/tournaments/') as FirebaseListObservable<any>;
  }
  
z 
  saveTeam(team){
    return this.teamsRef.push(team);
  }


  findAllTeams(){
    return this.db.list('/teams') as FirebaseListObservable<any>;
  }






}
