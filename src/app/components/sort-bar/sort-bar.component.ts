import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'as-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss'],
})
export class SortBarComponent {
  @Input() param!: 'name' | 'surname' | 'date' | 'ssn';

  @Output() paramChange = new EventEmitter<'name' | 'surname' | 'date' | 'ssn'>();

  @Input() orderBy!: boolean;

  @Output() orderByChange = new EventEmitter<boolean>();

  categories: { category: 'name' | 'surname' | 'date' | 'ssn'; funcParam: () => void }[] = [
    {
      category: 'name',
      funcParam: () => {
        this.param = 'name';
        this.paramChange.emit(this.param);
        this.orderBy = !this.orderBy;
        this.orderByChange.emit(this.orderBy);
      },
    },
    {
      category: 'surname',
      funcParam: () => {
        this.param = 'surname';
        this.paramChange.emit(this.param);
        this.orderBy = !this.orderBy;
        this.orderByChange.emit(this.orderBy);
      },
    },
    {
      category: 'date',
      funcParam: () => {
        this.param = 'date';
        this.paramChange.emit(this.param);
        this.orderBy = !this.orderBy;
        this.orderByChange.emit(this.orderBy);
      },
    },
    {
      category: 'ssn',
      funcParam: () => {
        this.param = 'ssn';
        this.paramChange.emit(this.param);
        this.orderBy = !this.orderBy;
        this.orderByChange.emit(this.orderBy);
      },
    },
  ];
}
