import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/services/firebase/firebase.service';
import { Game } from 'app/game-scheduler/tournament';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prediction-board',
  templateUrl: './prediction-board.component.html',
  styleUrls: ['./prediction-board.component.css']
})

export class PredictionBoardComponent implements OnInit {

  gameLines: any = [];
  myPrediction = {};
  results = {};
  public myGame: Game;

  constructor(private _firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    let tournamentId= this.route.snapshot.params['id'];
    this._firebaseService.findAllGamesByTournamentId(tournamentId)
      .subscribe((gameList) => {
        this.gameLines = [];
        gameList.forEach((gameId) => {
          this._firebaseService.findGameById(gameId.$key).subscribe((game) => {
            this.myGame = new Game();
            this.myGame.team1 = game.team1;
            this.myGame.team2 = game.team2;
            this.myGame.venue = game.venue;
            this.myGame.gameDateTime = game.gameDateTime;
            this.myGame.gameId = game.$key;

            this._firebaseService.getMyPredictions(game.$key).subscribe((gamePrediction) => {
              this.myPrediction[gamePrediction.$key] = gamePrediction.$value;
            });

            this._firebaseService.getResults(game.$key).subscribe((results) => {
              this.results[results.$key] = results.$value;
            });
            
            this.gameLines.push(this.myGame);
          });
        })
      }, (err) => {
        console.log('Error fetching all games using tournament id' + err);
      });
  }

  setPrediction(gameId, prediction) {
    this.myPrediction[gameId] = prediction;
    console.log(this.myPrediction);
  }

  saveMyPredictions() {
    this._firebaseService.saveMyPredictions(this.myPrediction);
  }
}
