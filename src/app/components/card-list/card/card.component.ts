import { Component, Input } from '@angular/core';
import { Card } from 'src/app/utils/mock-data';
//change this component name to patient-card

@Component({
  selector: 'as-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Card;

  @Input() index!: number;

  openDetails() {
    console.log('change to details');
  }
}
