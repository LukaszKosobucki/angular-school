/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit, Input } from '@angular/core';
import { FormInputsService } from 'src/app/services/form-inputs.service';
import { FormInput } from 'src/app/utils/form-inputs';
import { PatientService } from 'src/app/services/patient.service';
import { Card } from 'src/app/utils/mock-data';
import { ActivatedRoute, Router } from '@angular/router';
import { EditPatientFormType } from 'src/app/pages/edit-patient/edit-patient.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'as-edit-patient-form',
  templateUrl: './edit-patient-form.component.html',
  styleUrls: ['./edit-patient-form.component.scss'],
})
export class EditPatientFormComponent implements OnInit {
  formInputList: FormInput[] = [];

  @Input() editPatientForm!: FormGroup<EditPatientFormType>;

  @Input() patientId!: string | null;

  patient!: Card;

  constructor(
    private formInputsService: FormInputsService,
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
  ) {}

  ngOnInit(): void {
    this.formInputList = this.formInputsService.getFormInputs();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.patient = this.route.snapshot.data['patient'];
    this.editPatientForm.setValue({
      ...this.patient,
      date: new Date(this.patient.date).getTime() === 0 ? '' : new Date(this.patient.date).toISOString().substring(0, 10),
    });
  }

  onSubmit(): void {
    const patient = this.editPatientForm.getRawValue();
    console.log(patient);
    this.patientService
      .editPatient(Number(this.patientId), { ...patient, date: new Date(patient.date).toLocaleDateString() })
      .subscribe(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.router.navigate([`/patient-details/${this.patientId}`]);
      });
  }
}
