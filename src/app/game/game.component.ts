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
    if (!this.pickCardAnimation) { // es kann nur der stack angeclickt werden, wenn die Variable = false ist (als Standart definiert)
      this.currentCard = this.game.stack.pop(); // nimmt die letzte Karte aus dem stack
      //console.log(this.currentCard); // anzeigen der letzten Karte, die aus dem stack genommen wurde

      this.pickCardAnimation = true; // die Variable wird auf true gesetzt

      setTimeout(() => { // nach 1,5 sek. wird die Variable wieder auf false gesetzt. Damit verschwindet nach 1,5 sek. die hingeworfene 
                         // Karte und es kann erneut auf den stack geclickt werden.
        this.pickCardAnimation = false;
      }, 1500);
    }
  }

}
