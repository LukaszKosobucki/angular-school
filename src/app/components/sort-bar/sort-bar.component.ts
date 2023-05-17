/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SortParams } from 'src/app/pages/homepage/homepage.component';

@Component({
  selector: 'as-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
  @Input() sortParams!: SortParams | null;

  constructor(private route: Router) {}

  categories: { category: 'name' | 'surname' | 'date' | 'ssn'; func: () => void }[] = [
    {
      category: 'name',
      func: () =>
        this.route.navigate(['homepage'], {
          queryParams: { category: 'name', orderBy: this.sortParams && this.sortParams.orderBy === 'asc' ? 'desc' : 'asc' },
          queryParamsHandling: 'merge',
        }),
    },
    {
      category: 'surname',
      func: () =>
        this.route.navigate(['homepage'], {
          queryParams: { category: 'surname', orderBy: this.sortParams && this.sortParams.orderBy === 'asc' ? 'desc' : 'asc' },
          queryParamsHandling: 'merge',
        }),
    },
    {
      category: 'date',
      func: () =>
        this.route.navigate(['homepage'], {
          queryParams: { category: 'date', orderBy: this.sortParams && this.sortParams.orderBy === 'asc' ? 'desc' : 'asc' },
          queryParamsHandling: 'merge',
        }),
    },
    {
      category: 'ssn',
      func: () =>
        this.route.navigate(['homepage'], {
          queryParams: { category: 'ssn', orderBy: this.sortParams && this.sortParams.orderBy === 'asc' ? 'desc' : 'asc' },
          queryParamsHandling: 'merge',
        }),
    },
  ];
}
