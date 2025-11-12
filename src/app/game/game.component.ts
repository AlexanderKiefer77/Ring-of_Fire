import { Component } from '@angular/core';
import { NgForOf, NgStyle, NgIf } from "@angular/common";
import { Game } from '../../models/game';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, NgStyle, NgIf],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard?: string = '';
  game: Game;

  constructor() {
    this.game = new Game();
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    // console.log(this.game); // anzeigen des gemischten stack
  }

  takeCard() { 
    this.currentCard = this.game.stack.pop(); // nimmt die letzte Karte aus dem stack
    //console.log(this.currentCard); // anzeigen der letzten Karte, die aus dem stack genommen wurde
    
    this.pickCardAnimation = true;
  }

}
