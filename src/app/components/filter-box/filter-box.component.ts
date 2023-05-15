import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
export class FilterBoxComponent {
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
    { phrase: 'patient date', type: 'text', id: 'date' },
    { phrase: 'patient ssn', type: 'text', id: 'ssn' },
    { phrase: 'patient phone number', type: 'text', id: 'phoneNumber' },
  ];

  onSubmit() {
    console.log(this.searchBoxForm.value);
  }
}
