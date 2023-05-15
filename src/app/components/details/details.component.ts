import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/utils/mock-data';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'as-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
//change this component name to patient-details
export class DetailsComponent implements OnInit {
  @Input() patientId!: string | null;

  patient!: Card;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patient = this.patientService.getPatient(Number(this.patientId));
  }
}
