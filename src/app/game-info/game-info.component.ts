import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})

export class GameInfoComponent implements OnInit, OnChanges {
  // für Anleitung - Spielregeln
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  title: string = '';
  description: string = '';
  @Input() card: string = '';

  constructor() { }

  ngOnInit(): void {
     //this.updateCardInfo();
  }

  ngOnChanges(changes: SimpleChanges): void { // void bedeutet, das diese Funktion nur etwas ausführt und nichts zurück gibt
    //if (changes['card']) {
      if(this.card) {
      // console.log('Current Cart is: ', this.card);
      // console.log('Current number is: ', this.card.split('_')); // mit split wird aus z.B. "hearts_5" dann ein Array mit "hearts" und "5"
      // console.log('Current number is: ', this.card.split('_')[1]); // damit wird nur das 2. Element in diesem erzeugten Array angezeigt z.B. "5", dies ist aber eine String
      let cardNumber = +this.card.split('_')[1]; // durch das + wird der string in eine Zahl umgewandelt
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
      //this.updateCardInfo();
    }
  }

  //updateCardInfo(): void {
  //  const cardNumber = parseInt(this.card.split('_')[1]) || 0;
  //  const action = this.cardAction[cardNumber - 1];
  //  if (action) {
  //    this.title = action.title;
  //    this.description = action.description;
  //  }
  //}
  
}