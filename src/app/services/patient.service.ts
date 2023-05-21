/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/utils/mock-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseURL = 'http://localhost:3000/api/patients';

  constructor(private httpClient: HttpClient) {}

  getPatients(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.baseURL}`);
  }

  getPatient(ssn: number): Observable<Card> {
    return this.httpClient.get<Card>(`${this.baseURL}/${ssn}`);
  }

  newPatient(patient: Card): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, patient);
  }

  editPatient(index: number, patient: Card): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${index}`, patient);
  }
}
