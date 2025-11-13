import { Component } from '@angular/core';
import { NgForOf, NgStyle, NgIf } from "@angular/common";
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, NgStyle, NgIf, PlayerComponent, MatButtonModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard?: string;
  game!: Game;

  constructor() {
    // this.game = new Game();
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    // console.log(this.game); // anzeigen des gemischten stack
  }

  // Zwischenschritt
  //    takeCard() {
  //      if (!this.pickCardAnimation) { // es kann nur der stack angeclickt werden, wenn die Variable = false ist (als Standart definiert)
  //        this.currentCard = this.game.stack.pop(); // nimmt die letzte Karte aus dem stack
  //        //console.log(this.currentCard); // anzeigen der letzten Karte, die aus dem stack genommen wurde

  //        this.pickCardAnimation = true; // die Variable wird auf true gesetzt

  //        setTimeout(() => { // nach 1,5 sek. wird die Variable wieder auf false gesetzt. Damit verschwindet nach 1,5 sek. die hingeworfene 
  //                           // Karte und es kann erneut auf den stack geclickt werden.
  //          this.pickCardAnimation = false;
  //        }, 1500);
  //      }
  //    }


  takeCard() {
    if (!this.pickCardAnimation) { // es kann nur der stack angeclickt werden, wenn die Variable = false ist (als Standart definiert)
      this.currentCard = this.game.stack.pop(); // nimmt die letzte Karte aus dem stack
      //console.log(this.currentCard); // anzeigen der letzten Karte, die aus dem stack genommen wurde
      this.pickCardAnimation = true; // die Variable wird auf true gesetzt

      setTimeout(() => {
        if (this.currentCard !== undefined) {
          this.game.playedCards.push(this.currentCard);// packt die aktuell gezogene Karte ins array playedCards
          // console.log('Played Card:', this.currentCard);
          // console.log('stack is: ', this.game);
        }
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
