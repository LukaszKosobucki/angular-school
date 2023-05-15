import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/utils/mock-data';
import { PatientService } from 'src/app/services/patient.service';
import { MultiFilter } from 'src/app/pages/homepage/homepage.component';

@Component({
  selector: 'as-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})

//change this component name to patient-card-list
export class CardListComponent implements OnInit {
  @Input() orderBy!: boolean;

  @Input() param!: 'name' | 'surname' | 'date' | 'ssn';

  @Input() multiFilter!: MultiFilter;

  cards: Card[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((cards) => (this.cards = cards));
  }
}
