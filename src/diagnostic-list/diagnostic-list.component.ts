import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrl: './diagnostic-list.component.scss'
})
export class DiagnosticListComponent implements OnInit {
  displayedColumns: string[] = ['problem', 'description', 'status'];
  diagnostics = [
    { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
    
    { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
    // Add more diagnostics
  ];

  constructor() { }

  ngOnInit(): void { }
}
