import { Component, Input } from '@angular/core';

export type FormInput = {
  text: string;
  id: string;
  type: string;
};

@Component({
  selector: 'as-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() formInput!: FormInput;
}
