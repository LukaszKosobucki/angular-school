/* eslint-disable @typescript-eslint/no-floating-promises */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { FilterParams } from 'src/app/pages/homepage/homepage.component';

type SearchObject = {
  phrase: string;
  id: string;
  type: 'text' | 'number' | 'date';
};

type SearchBoxForm = {
  surname: FormControl<string>;
  date: FormControl<string>;
  ssn: FormControl<string>;
  phoneNumber: FormControl<string>;
};

@Component({
  selector: 'as-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent implements OnInit {
  @Input() filterParams!: FilterParams | null;

  searchBoxForm = new FormGroup<SearchBoxForm>({
    surname: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.maxLength(120)],
    }),
    date: new FormControl<string>('', {
      nonNullable: true,
    }),
    ssn: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.maxLength(11)],
    }),
    phoneNumber: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.maxLength(9)],
    }),
  });

  searchList: SearchObject[] = [
    { phrase: 'patient surname', type: 'text', id: 'surname' },
    { phrase: 'patient date', type: 'date', id: 'date' },
    { phrase: 'patient ssn', type: 'text', id: 'ssn' },
    { phrase: 'patient phone number', type: 'text', id: 'phoneNumber' },
  ];

  constructor(private route: Router) {}

  onSubmit() {
    console.log(this.searchBoxForm.value);
  }

  ngOnInit() {
    if (this.filterParams !== null) {
      this.searchBoxForm.setValue({
        ...this.filterParams,
        date: this.filterParams.date.getTime() === 0 ? '' : this.filterParams.date.toISOString().substring(0, 10),
      });
    }

    this.searchBoxForm.controls['surname'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (this.filterParams !== null) {
        this.filterParams.surname = value;
        this.route.navigate(['/homepage'], {
          queryParams: this.filterParams,
          queryParamsHandling: 'merge',
        });
      }
    });
    this.searchBoxForm.controls['ssn'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (this.filterParams !== null) {
        this.filterParams.ssn = value;
        this.route.navigate(['/homepage'], {
          queryParams: this.filterParams,
          queryParamsHandling: 'merge',
        });
      }
    });
    this.searchBoxForm.controls['phoneNumber'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (this.filterParams !== null) {
        this.filterParams.phoneNumber = value;
        this.route.navigate(['/homepage'], {
          queryParams: this.filterParams,
          queryParamsHandling: 'merge',
        });
      }
    });
    this.searchBoxForm.controls['date'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (this.filterParams !== null) {
        this.filterParams.date = new Date(value);
        this.route.navigate(['/homepage'], {
          queryParams: this.filterParams,
          queryParamsHandling: 'merge',
        });
      }
    });
  }
}
