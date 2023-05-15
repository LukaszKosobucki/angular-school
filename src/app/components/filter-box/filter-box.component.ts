import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

type SearchObject = {
  phrase: string;
  id: string;
  type: 'text' | 'number' | 'date';
};

type SearchBoxForm = {
  surname: FormControl<string>;
  date: FormControl<Date>;
  ssn: FormControl<string>;
  phoneNumber: FormControl<string>;
};

@Component({
  selector: 'as-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent implements OnInit {
  @Input() multiFilter!: { surname: string; phoneNumber: string; ssn: string; date: Date };

  @Output() multiFilterChange = new EventEmitter<{ surname: string; phoneNumber: string; ssn: string; date: Date }>();

  searchBoxForm = new FormGroup<SearchBoxForm>({
    surname: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.maxLength(120)],
    }),
    date: new FormControl<Date>(new Date(), {
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

  onSubmit() {
    console.log(this.searchBoxForm.value);
  }

  ngOnInit() {
    this.searchBoxForm.controls['surname'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.multiFilter.surname = value;
      this.multiFilterChange.emit(this.multiFilter);
    });
    this.searchBoxForm.controls['ssn'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.multiFilter.ssn = value;
      this.multiFilterChange.emit(this.multiFilter);
    });
    this.searchBoxForm.controls['phoneNumber'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.multiFilter.phoneNumber = value;
      this.multiFilterChange.emit(this.multiFilter);
    });
    this.searchBoxForm.controls['date'].valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.multiFilter.date = new Date(value);
      this.multiFilterChange.emit(this.multiFilter);
    });
  }
}
