import { Component } from '@angular/core';
import { PatientsListService } from '../services/patients-list.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss'
})
export class PatientDetailsComponent {
  patientDetails: any;

  constructor(private diagnoticListsData: PatientsListService) { }

  ngOnInit(): void {
    const username = 'coalition';
    const password = 'skills-test';

    this.diagnoticListsData.patientsList(username, password).subscribe(
      (data: any) => {
        const jessica = data.find((patient: any) => patient.name === 'Jessica Taylor');

        if (jessica && Array.isArray(jessica.diagnosis_history) && jessica.diagnosis_history.length > 0) {

          this.patientDetails = jessica;
        }

      },
      (error) => {
        console.error('Error fetching patient data:', error);

        if (error.status === 401) {
          alert('Unauthorized - Invalid credentials');
        } else {
          alert('Error fetching patient data; please try again later.');
        }
      }
    );
  }
}

