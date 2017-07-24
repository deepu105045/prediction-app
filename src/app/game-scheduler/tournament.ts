export class Game {
    gameId: string;
    gameDateTime: Date;
    venue: string;
    team1: string;
    team2: string;
    myPrediction: string
}

export class Tournament {
    tournamentName: string;
    year: string;
    sport: string;
    gameFormat: string;
    numberOfMatches: number;
}
