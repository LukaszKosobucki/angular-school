import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { getPatientResolver } from 'src/app/resolvers/get-patient.resolver';
import { noSavedChangesGuard } from './guards/no-saved-changes.guard';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'new-patient', component: NewPatientComponent },
  {
    path: 'patient-details/:id',
    component: DetailsPageComponent,
    resolve: {
      patient: getPatientResolver,
    },
  },
  {
    path: 'edit-patient/:id',
    component: EditPatientComponent,
    resolve: {
      patient: getPatientResolver,
    },

    canDeactivate: [noSavedChangesGuard],
  },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
