import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "app/services/firebase/firebase.service";

@Component({
  selector: 'app-prediction-board',
  templateUrl: './prediction-board.component.html',
  styleUrls: ['./prediction-board.component.css']
})
export class PredictionBoardComponent implements OnInit {
  gameLines: any = [];
  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getGameFixtures('2017','ipl')
      .subscribe((gameLines) => {
        this.gameLines=gameLines;
        console.log(gameLines);
      }, (err) => {
        console.log("Error while fetching details from firebase service ", err);
      })
  }

}
