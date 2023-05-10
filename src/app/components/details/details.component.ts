import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card-list/card/card.component';
import { CARDS } from 'src/mock-data';

@Component({
  selector: 'as-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
//change this component name to patient-details
export class DetailsComponent implements OnInit {
  @Input() userId!: string | null;

  userInfo!: Card;

  ngOnInit() {
    this.userInfo = CARDS[Number(this.userId)];
  }
}
