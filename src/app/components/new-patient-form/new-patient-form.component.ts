/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormInputsService } from 'src/app/services/form-inputs.service';
import { FormInput } from 'src/app/utils/form-inputs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';
import { ssnValidator } from 'src/app/utils/ssnValidator';

type NewPatientFormType = {
  name: FormControl<string>;
  surname: FormControl<string>;
  date: FormControl<Date>;
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
  selector: 'as-new-patient-form',
  templateUrl: './new-patient-form.component.html',
  styleUrls: ['./new-patient-form.component.scss'],
})
export class NewPatientFormComponent implements OnInit {
  formInputList: FormInput[] = [];

  newPatientForm = new FormGroup<NewPatientFormType>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(120)],
    }),
    surname: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(120)],
    }),
    date: new FormControl<Date>(new Date(), { nonNullable: true, validators: [Validators.required] }),
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

  constructor(private formInputsService: FormInputsService, private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.formInputList = this.formInputsService.getFormInputs();
  }

  onSubmit(): void {
    const patient = this.newPatientForm.getRawValue();
    console.log(patient.date);
    this.patientService.newPatient({ ...patient, date: new Date(patient.date).toLocaleDateString() }).subscribe(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.router.navigate(['/homepage']);
    });
  }
}
