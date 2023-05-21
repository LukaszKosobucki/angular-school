import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/utils/mock-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'as-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
//change this component name to patient-details
export class DetailsComponent implements OnInit {
  @Input() patientId!: string | null;

  patient!: Card;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.patient = this.route.snapshot.data['patient'];
  }
}
