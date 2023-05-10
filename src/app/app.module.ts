import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card-list/card/card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailsComponent } from './components/details/details.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { NewCardComponent } from './components/card-list/new-card/new-card.component';
import { NewPatientFormComponent } from './components/new-patient-form/new-patient-form.component';
import { FormInputComponent } from './components/new-patient-form/form-input/form-input.component';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    CardListComponent,
    CardComponent,
    HomepageComponent,
    DetailsComponent,
    SortBarComponent,
    DetailsPageComponent,
    NewPatientComponent,
    NewCardComponent,
    NewPatientFormComponent,
    FormInputComponent,
    FilterBoxComponent,
    SortButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
