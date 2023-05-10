import { Component, Input } from '@angular/core';

export type Card = {
  name: string;
  surname: string;
  date: string;
  ssn: number;
  phoneNumber: number;
  img: string;
};

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
