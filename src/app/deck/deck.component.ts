import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Card } from '../card.model';
import { CardService } from '../card.service';
import { Router } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  providers: [CardService]
})
export class DeckComponent implements OnInit {
  @Output() clickSender= new EventEmitter();
  cards:FirebaseListObservable<any[]>;
  hand:FirebaseObjectObservable<any[]>;
  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }
  sendCost(cost){
    this.clickSender.emit(cost);
  }
  drawCard() {
    this.hand=this.cardService.getCardById("1");
    this.cards.push(this.hand);
  }
}
