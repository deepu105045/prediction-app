import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  gameFixtures: FirebaseListObservable<any[]>;
  results: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  getGameFixtures(year: string,league: string) {
    return this.db.list('/tournaments/'+year+'/'+league+'/gameCalendar') as FirebaseListObservable<any>;
  }

  getResult(gameId: string){
    return this.db.object('tournaments/2017/ipl/results/'+ gameId) as FirebaseObjectObservable<any>
  }

}
