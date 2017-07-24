import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fixtures: any;
  tournamentList: any = [];

  constructor(private firebaseService: FirebaseService,private router : Router) { }

  ngOnInit() {
    this.firebaseService.findAllTournaments()
      .subscribe(
        (tournaments) => {
          for (let i = 0; i < tournaments.length; i++) {
            this.tournamentList.push(
              {
                'tournamentId': tournaments[i].$key,
                'tournamentname': tournaments[i].tournamentName
              }
            )
          }
        }
      );
  }

  onSelect(tournamentId){
    this.router.navigate(['/authenticated/prediction-board',tournamentId]);
  }

}
