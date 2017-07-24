import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "app/services/firebase/firebase.service";
import { Game } from "app/game-scheduler/tournament";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

gameLines: any = [];
  results={};
  public myGame: Game;

  constructor(private _firebaseService: FirebaseService) { }
  
  ngOnInit() {
    this._firebaseService.findAllGamesByTournamentId('-KpKqcTQ7QcsnpzdbmPn')
        .subscribe((gameList)=>{
          this.gameLines = [];
          gameList.forEach((gameId)=>{
            this._firebaseService.findGameById(gameId.$key).subscribe((game)=>{

              this.myGame = new Game();
              this.myGame.team1 = game.team1;
              this.myGame.team2 = game.team2;
              this.myGame.venue = game.venue;
              this.myGame.gameDateTime = game.gameDateTime;
              this.myGame.gameId=game.$key;           

              this._firebaseService.getResults(game.$key).subscribe((results)=>{
                 this.results[results.$key]=results.$value;
              });
              this.gameLines.push(this.myGame);              
            });
          })
        },(err)=>{
          console.log('Error fetching all games using tournament id'+err);
        });
  }

  updatePrediction(gameId,prediction){
     this.results[gameId]=prediction;
  }

  saveResults(){
    this._firebaseService.saveResults(this.results);
  }

}
