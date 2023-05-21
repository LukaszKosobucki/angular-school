import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';
import { Card } from '../utils/mock-data';

@Injectable({ providedIn: 'root' })
export class getPatientResolver implements Resolve<Card> {
  constructor(private patientService: PatientService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Card> {
    return this.patientService.getPatient(Number(route.paramMap.get('id')));
  }
}
