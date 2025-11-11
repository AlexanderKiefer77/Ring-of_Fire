import { Component } from '@angular/core';
import { NgForOf, NgStyle, NgIf } from "@angular/common";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgForOf, NgStyle, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;

  constructor() {}

  takeCard() {
    this.pickCardAnimation = true;
  }

}
