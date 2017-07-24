import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from 'app/services/firebase/firebase.service';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tournament-settings',
  templateUrl: './tournament-settings.component.html',
  styleUrls: ['./tournament-settings.component.css']
})
export class TournamentSettingsComponent implements OnInit {

  tournamentList: any = [];
  currentSelection = 'Show Tournament';
  teamForm: FormGroup;
  public team = {};
  allTeams: any = [];
  tournamentSelected='Select a Tournament';

  constructor(private firebaseService: FirebaseService, private router: Router, private _fb: FormBuilder) { }

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

    this.firebaseService.findAllTeams().subscribe((teams) => {
      this.allTeams = teams;
      console.log(this.allTeams)
    });

    this.teamForm = this._fb.group({
      teamName: ['', Validators.required],
      displayName: ['', Validators.required]
    });

  }

  onSelect(selection) {
    this.currentSelection = selection;
  }

  onTournamentSelection(){
    console.log(this.tournamentSelected)
  }

  createTeam() {
    this.team['teamName'] = this.teamForm.controls.teamName.value;
    this.team['displayName'] = this.teamForm.controls.displayName.value;
    this.firebaseService.saveTeam(this.team);
  }

}
