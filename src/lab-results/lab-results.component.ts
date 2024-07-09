import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrl: './lab-results.component.scss'
})
export class LabResultsComponent {
tests = [
    { testName: 'Blood Tests' },
    { testName: 'CT Scans' },
    { testName: 'Radiology Reports' },
    { testName: 'X-Rays' },
    { testName: 'Urine Tests'},
  ];
}
