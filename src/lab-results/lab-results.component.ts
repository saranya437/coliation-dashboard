import { Component } from '@angular/core';
import { PatientsListService } from '../services/patients-list.service';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrl: './lab-results.component.scss'
})
export class LabResultsComponent {
  labResults: any;

  constructor(private labResultsData: PatientsListService) { }

  ngOnInit(): void {
    const username = 'coalition';
    const password = 'skills-test';

    this.labResultsData.patientsList(username, password).subscribe(
      (data: any) => {
        const jessica = data.find((patient: any) => patient.name === 'Jessica Taylor');

        if (jessica && Array.isArray(jessica.diagnosis_history) && jessica.diagnosis_history.length > 0) {

          this.labResults = jessica.lab_results;
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

