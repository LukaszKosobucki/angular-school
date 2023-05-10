import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientFormComponent } from './new-patient-form.component';

describe('NewPatientFormComponent', () => {
  let component: NewPatientFormComponent;
  let fixture: ComponentFixture<NewPatientFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPatientFormComponent]
    });
    fixture = TestBed.createComponent(NewPatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
