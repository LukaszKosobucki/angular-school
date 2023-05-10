import { Component, Input } from '@angular/core';

export type SearchObject = { phrase: string; type: string };

@Component({
  selector: 'as-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() searchObject!: SearchObject;
}
