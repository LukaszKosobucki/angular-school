import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent {
  @Input() category!: string;
}
