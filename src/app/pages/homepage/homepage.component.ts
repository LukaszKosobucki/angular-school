import { Component } from '@angular/core';

@Component({
  selector: 'as-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  orderBy = true;

  param: 'name' | 'surname' | 'date' | 'ssn' = 'ssn';
}
