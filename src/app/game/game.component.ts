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
  game: Game; // ????

  constructor() {
    this.game = new Game();
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
    
  }

  takeCard() {
    this.pickCardAnimation = true;
  }

}
