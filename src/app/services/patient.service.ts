import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card, CARDS } from 'src/app/utils/mock-data';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  getPatients(): Observable<Card[]> {
    const patients = of(CARDS);
    return patients;
  }

  getPatient(index: number): Card {
    return CARDS[index];
  }

  newPatient(patient: Card): void {
    CARDS.push(patient);
  }

  editPatient(index: number, patient: Card): void {
    CARDS[index] = patient;
  }
}
