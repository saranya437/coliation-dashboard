import { Component, OnInit } from '@angular/core';
import { PatientsListService } from '../services/patients-list.service';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrl: './diagnostic-list.component.scss'
})
export class DiagnosticListComponent implements OnInit {
  displayedColumns: string[] = ['problem', 'description', 'status'];
  diagnoticLists: any;

  constructor(private diagnoticListsData: PatientsListService) { }

  ngOnInit(): void {
    const username = 'coalition';
    const password = 'skills-test';

    this.diagnoticListsData.patientsList(username, password).subscribe(
      (data: any) => {

        const jessica = data.find((patient: any) => patient.name === 'Jessica Taylor');

        if (jessica && Array.isArray(jessica.diagnosis_history) && jessica.diagnosis_history.length > 0) {

          this.diagnoticLists = jessica.diagnostic_list;
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
