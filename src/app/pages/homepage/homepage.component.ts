import { Component } from '@angular/core';

export type MultiFilter = { surname: string; phoneNumber: string; ssn: string; date: Date };

@Component({
  selector: 'as-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  orderBy = true;

  param: 'name' | 'surname' | 'date' | 'ssn' = 'ssn';

  multiFilter: MultiFilter = { surname: '', phoneNumber: '', ssn: '', date: new Date(0) };
}
