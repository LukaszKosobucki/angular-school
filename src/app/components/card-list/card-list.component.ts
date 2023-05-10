import { Component } from '@angular/core';
import { Card } from './card/card.component';
import { CARDS } from 'src/mock-data';

@Component({
  selector: 'as-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})

//change this component name to patient-card-list
export class CardListComponent {
  cards: Card[] = CARDS;
}
