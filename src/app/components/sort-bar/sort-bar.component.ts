/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortParams } from 'src/app/pages/homepage/homepage.component';

@Component({
  selector: 'as-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
  @Input() sortParams!: SortParams;

  categories: { category: 'name' | 'surname' | 'date' | 'ssn' }[] = [
    {
      category: 'name',
    },
    {
      category: 'surname',
    },
    {
      category: 'date',
    },
    {
      category: 'ssn',
    },
  ];
}
