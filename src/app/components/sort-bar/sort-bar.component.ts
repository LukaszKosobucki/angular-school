import { Component } from '@angular/core';

@Component({
  selector: 'as-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
  categories: string[] = ['name', 'surname', 'date', 'ssn'];
}
