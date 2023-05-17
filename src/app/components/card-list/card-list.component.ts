/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/utils/mock-data';
import { PatientService } from 'src/app/services/patient.service';
import { FilterParams, SortParams } from 'src/app/pages/homepage/homepage.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'as-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})

//change this component name to patient-card-list
export class CardListComponent implements OnInit {
  @Input() sortParams: SortParams | null = { category: 'ssn', orderBy: 'asc' };

  @Input() filterParams: FilterParams | null = {
    surname: '',
    phoneNumber: '',
    ssn: '',
    date: new Date(0),
  };

  cards: Card[] = [];

  constructor(private patientService: PatientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((cards) => {
      this.cards = cards;
    });
  }
}
