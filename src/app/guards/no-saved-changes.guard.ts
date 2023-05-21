import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EditPatientComponent } from 'src/app/pages/edit-patient/edit-patient.component';

@Injectable({ providedIn: 'root' })
export class noSavedChangesGuard implements CanDeactivate<EditPatientComponent> {
  canDeactivate(component: EditPatientComponent): boolean {
    if (component.editPatientForm.dirty) {
      return confirm('Are you sure you want to navigate away and lose changes to the form?');
    }
    return true;
  }
}
