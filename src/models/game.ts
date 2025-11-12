
export class Game { // erstellt ein Object für die Spieldaten
    public players: string[] = ['Hans', 'Freddy', 'Peter' ];
    public stack: string[] = []; // für stack
    public playedCards: string[] = []; // für gespielte Karten
    public currentPlayer: number = 0;

    constructor() {
        for(let i = 1; i < 14; i++) { // fügt die Spielkarten beim Start des Spieles in den stack hinzu
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }
        
        shuffle(this.stack);
    }
}


// sortiert die Karten im stack zufällig quasi Karten gemischt
function shuffle(array: string[]): string[] { 
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0!== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;
}