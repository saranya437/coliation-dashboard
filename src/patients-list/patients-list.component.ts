import { Component, OnInit } from '@angular/core';
import { PatientsListService } from '../services/patients-list.service.js';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss'
})
export class PatientsListComponent implements OnInit {


  patientsUsers: any;

  constructor(private patientData: PatientsListService) { }

  ngOnInit(): void {
    const username = 'coalition';
    const password = 'skills-test';

    this.patientData.patientsList(username, password).subscribe(
      (data: any) => {

        this.patientsUsers = data;
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