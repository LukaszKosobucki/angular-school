import { Component } from '@angular/core';
import { SearchObject } from '../search-bar/search-bar.component';

@Component({
  selector: 'as-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent {
  searchList: SearchObject[] = [
    { phrase: 'patient surname', type: 'text' },
    { phrase: 'patient date', type: 'date' },
    { phrase: 'patient ssn', type: 'text' },
    { phrase: 'patient phone number', type: 'text' },
  ];
}
