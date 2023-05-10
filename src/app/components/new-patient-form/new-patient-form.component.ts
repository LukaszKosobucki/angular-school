import { Component } from '@angular/core';
import { FormInput } from './form-input/form-input.component';

@Component({
  selector: 'as-new-patient-form',
  templateUrl: './new-patient-form.component.html',
  styleUrls: ['./new-patient-form.component.scss'],
})
export class NewPatientFormComponent {
  formInputList: FormInput[] = [
    {
      text: 'name',
      id: 'name',
      type: 'text',
    },
    {
      text: 'surname',
      id: 'surname',
      type: 'text',
    },
    {
      text: 'date of birth',
      id: 'dateOfBirth',
      type: 'date',
    },
    {
      text: 'ssn',
      id: 'ssn',
      type: 'text',
    },
    {
      text: 'Phone number',
      id: 'phoneNumber',
      type: 'text',
    },
    {
      text: 'img adress',
      id: 'imgAdress',
      type: 'text',
    },
  ];
}
