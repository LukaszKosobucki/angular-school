import { Component } from '@angular/core';

@Component({
  selector: 'as-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})

//change this component name to patient-new-card
export class NewCardComponent {
  openNewPatient() {
    console.log('change to new patient');
  }
}
