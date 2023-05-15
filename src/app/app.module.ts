import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card-list/card/card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailsComponent } from './components/details/details.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { NewCardComponent } from './components/card-list/new-card/new-card.component';
import { NewPatientFormComponent } from './components/new-patient-form/new-patient-form.component';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { EditPatientComponent } from './pages/edit-patient/edit-patient.component';
import { EditPatientFormComponent } from './components/edit-patient-form/edit-patient-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardListComponent,
    CardComponent,
    HomepageComponent,
    DetailsComponent,
    SortBarComponent,
    DetailsPageComponent,
    NewPatientComponent,
    NewCardComponent,
    NewPatientFormComponent,
    FilterBoxComponent,
    EditPatientComponent,
    EditPatientFormComponent,
    SortByPipe,
    FilterByPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
