import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PatientsListComponent } from '../patients-list/patients-list.component';
import { DiagnosisHistoryComponent } from '../diagnosis-history/diagnosis-history.component';
import { DiagnosticListComponent } from '../diagnostic-list/diagnostic-list.component';
import { LabResultsComponent } from '../lab-results/lab-results.component';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { MatCardModule } from '@angular/material/card';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    PatientsListComponent,
    DiagnosisHistoryComponent,
    DiagnosticListComponent,
    LabResultsComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
