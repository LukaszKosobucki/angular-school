/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit, Input } from '@angular/core';
import { FormInputsService } from 'src/app/services/form-inputs.service';
import { FormInput } from 'src/app/utils/form-inputs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Card } from 'src/app/utils/mock-data';
import { Router } from '@angular/router';
import { ssnValidator } from 'src/app/utils/ssnValidator';

type EditPatientFormType = {
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
  selector: 'as-edit-patient-form',
  templateUrl: './edit-patient-form.component.html',
  styleUrls: ['./edit-patient-form.component.scss'],
})
export class EditPatientFormComponent implements OnInit {
  formInputList: FormInput[] = [];

  @Input() patientId!: string | null;

  patient!: Card;

  editPatientForm = new FormGroup<EditPatientFormType>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(120)],
    }),
    surname: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(120)],
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
    this.patient = this.patientService.getPatient(Number(this.patientId));
    this.editPatientForm.setValue({ ...this.patient, date: new Date(this.patient.date) });
  }

  onSubmit(): void {
    const patient = this.editPatientForm.getRawValue();
    this.patientService.editPatient(Number(this.patientId), { ...patient, date: patient.date.toLocaleDateString() });
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigate(['/homepage']);
  }
}
