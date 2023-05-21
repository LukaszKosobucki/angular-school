/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ssnValidator } from 'src/app/utils/ssnValidator';

export type EditPatientFormType = {
  name: FormControl<string>;
  surname: FormControl<string>;
  date: FormControl<string>;
  ssn: FormControl<string>;
  phoneNumber: FormControl<string>;
  img: FormControl<string>;
  email: FormControl<string>;
  city: FormControl<string>;
  street: FormControl<string>;
  postcode: FormControl<string>;
  country: FormControl<string>;
  voivodeship: FormControl<string>;
};

@Component({
  selector: 'as-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss'],
})
export class EditPatientComponent implements OnInit {
  patientId: string | null = null;

  editPatientForm = new FormGroup<EditPatientFormType>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(120)],
    }),
    surname: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(120)],
    }),
    date: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    ssn: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, ssnValidator()] }),
    phoneNumber: new FormControl<string>('', { nonNullable: true, validators: [Validators.minLength(9), Validators.maxLength(9)] }),
    img: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.pattern('^(http(s)://.)[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$')],
    }),
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.email] }),
    city: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(60)] }),
    street: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(250)] }),
    postcode: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    country: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(60)] }),
    voivodeship: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('id');
  }
}
