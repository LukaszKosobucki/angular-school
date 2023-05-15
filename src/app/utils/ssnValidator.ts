import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ssnValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const ssn: string = control.value as string;
    if (ssn && !isValidSsn(ssn)) {
      return { ssn: true };
    }
    return null;
  };
  function isValidSsn(ssn: string): boolean {
    if (ssn.length !== 11 || !/^\d+$/.test(ssn)) {
      return false;
    }
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(ssn.charAt(i)) * weights[i];
    }
    const controlDigit = (10 - (sum % 10)) % 10;
    if (controlDigit !== parseInt(ssn.charAt(10))) {
      return false;
    }
    return true;
  }
}
