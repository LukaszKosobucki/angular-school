/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export type FilterParams = { surname: string; phoneNumber: string; ssn: string; date: Date };

export type SortParams = { category: 'name' | 'surname' | 'date' | 'ssn'; orderBy: 'asc' | 'desc' };

@Component({
  selector: 'as-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  sortParams$ = new BehaviorSubject<SortParams>({
    category: 'ssn',
    orderBy: 'asc',
  });

  filterParams$ = new BehaviorSubject<FilterParams>({
    surname: '',
    phoneNumber: '',
    ssn: '',
    date: new Date(),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.sortParams$.next({ category: params['category'] ?? 'ssn', orderBy: params['orderBy'] ?? 'asc' });
    });
    this.route.queryParams.subscribe((params) => {
      this.filterParams$.next({
        surname: params['surname'] ?? '',
        phoneNumber: params['phoneNumber'] ?? '',
        ssn: params['ssn'] ?? '',
        date: params['date'] !== undefined ? new Date(params['date'] as string) : new Date(0),
      });
    });
  }
}
