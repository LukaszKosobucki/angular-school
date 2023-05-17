import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export type MultiFilter = { surname: string; phoneNumber: string; ssn: string; date: Date };

export type SortParams = { category: 'name' | 'surname' | 'date' | 'ssn'; orderBy: 'asc' | 'desc' };

@Component({
  selector: 'as-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  multiFilter: MultiFilter = { surname: '', phoneNumber: '', ssn: '', date: new Date(0) };

  sortParams$ = new BehaviorSubject<SortParams>({
    category: 'ssn',
    orderBy: 'asc',
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('params', params);
      this.sortParams$.next({ category: params['category'], orderBy: params['orderBy'] });
      console.log(this.sortParams$);
    });
  }
}
