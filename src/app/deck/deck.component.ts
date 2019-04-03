import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Card } from '../card.model';
import { CardService } from '../card.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  providers: [CardService]
})
export class DeckComponent implements OnInit {
  @Output() clickSender= new EventEmitter();
  cards:FirebaseListObservable<any[]>;
  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }
  sendCost(cost){
    this.clickSender.emit(cost);
  }
}
