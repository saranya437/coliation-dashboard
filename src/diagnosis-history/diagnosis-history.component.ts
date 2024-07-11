import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PatientsListService } from '../services/patients-list.service';

Chart.register(...registerables);

@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrls: ['./diagnosis-history.component.scss']
})
export class DiagnosisHistoryComponent implements OnInit {
  public config: any;
  chart: any;

  latestSystolic: number = 0;
  latestDiastolic: number = 0;
  latestRespiratoryRate: number = 0;
  latestTemperature: number = 0;
  latestHeartRate: number = 0;
  latestRespiratoryRateStatus: string = 'Normal';
  latestTemperatureStatus: string = 'Normal';
  latestHeartRateStatus: string = 'Normal';

  constructor(private diagnosisHistoryData: PatientsListService) { }

  ngOnInit(): void {
    const username = 'coalition';
    const password = 'skills-test';

    this.diagnosisHistoryData.patientsList(username, password).subscribe(
      (data: any) => {
        const jessica = data.find((patient: any) => patient.name === 'Jessica Taylor');

        if (jessica && Array.isArray(jessica.diagnosis_history) && jessica.diagnosis_history.length > 0) {

          const recentRecords = jessica.diagnosis_history.filter((record: any) => {
            const date = new Date(`${record.month} 1, ${record.year}`);
            const startDate = new Date('October 1, 2023');
            const endDate = new Date('March 31, 2024');
            return date >= startDate && date <= endDate;
          }).reverse();

          const labels = recentRecords.map((record: any) => `${record.month} ${record.year}`);
          const systolicData = recentRecords.map((record: any) => record.blood_pressure.systolic.value);
          const diastolicData = recentRecords.map((record: any) => record.blood_pressure.diastolic.value);

          const latestRecord = recentRecords[5];
          this.latestSystolic = latestRecord.blood_pressure.systolic.value;
          this.latestDiastolic = latestRecord.blood_pressure.diastolic.value;
          this.latestRespiratoryRate = latestRecord.respiratory_rate.value;
          this.latestTemperature = latestRecord.temperature.value;
          this.latestHeartRate = latestRecord.heart_rate.value;


          this.latestRespiratoryRateStatus = latestRecord.respiratory_rate.levels;
          this.latestTemperatureStatus = latestRecord.temperature.levels;
          this.latestHeartRateStatus = latestRecord.heart_rate.levels;

          this.config = {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Systolic',
                  data: systolicData,
                  borderColor: '#C26EB4',
                  backgroundColor: '#C26EB4',
                  borderWidth: 2,
                  borderCapStyle: 'round',
                  borderJoinStyle: 'round',
                  pointBackgroundColor: '#C26EB4',
                  pointBorderColor: '#C26EB4',
                  pointRadius: 5,
                  pointHoverRadius: 7,
                  fill: false,
                },
                {
                  label: 'Diastolic',
                  data: diastolicData,
                  borderColor: '#715DC3',
                  backgroundColor: '#715DC3',
                  borderWidth: 2,
                  borderCapStyle: 'round',
                  borderJoinStyle: 'round',
                  pointBackgroundColor: '#715DC3',
                  pointBorderColor: '#715DC3',
                  pointRadius: 5,
                  pointHoverRadius: 7,
                  fill: false
                }
              ]
            },
            options: {
              tension: 0.4,
              responsive: true,
              plugins: {
                legend: {
                  position: 'unset',
                },
              },
              scales: {
                y: {
                  beginAtZero: false,
                  min: 60,
                  max: 180,
                  ticks: {
                    stepSize: 20,
                    color: '#000000',
                    font: {
                      size: 14
                    }
                  },
                  grid: {
                    color: '#E2E7F1'
                  }
                },
                x: {
                  ticks: {
                    color: '#000000',
                    font: {
                      size: 14
                    }
                  },
                  grid: {
                    display: false
                  }
                }
              }
            }
          };

          this.chart = new Chart('MyChart', this.config);
        } else {
          console.error('Diagnosis history for Jessica Tylor is not in the expected format or is empty.');
          alert('Error: Diagnosis history for Jessica Tylor is not available.');
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
