import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/utils/mock-data';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'as-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})

//change this component name to patient-card-list
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((cards) => (this.cards = cards));
  }
}
