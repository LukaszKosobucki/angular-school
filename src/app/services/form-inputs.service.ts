import { Injectable } from '@angular/core';
import { FormInput, FORMINPUTLIST } from 'src/app/utils/form-inputs';

@Injectable({
  providedIn: 'root',
})
export class FormInputsService {
  getFormInputs(): FormInput[] {
    return FORMINPUTLIST;
  }
}
