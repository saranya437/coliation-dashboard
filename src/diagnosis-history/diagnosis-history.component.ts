import { Component, OnInit } from '@angular/core';
import { Chart, Colors, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrl: './diagnosis-history.component.scss'
})
export class DiagnosisHistoryComponent implements OnInit {
  constructor() { }


  public config: any = {
    type: 'line',
    data: {
      labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
      datasets: [
        {
          label: 'Systolic',
          data: [120, 115, 160, 110, 150, 158],
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
          data: [110, 65, 110, 95, 70, 78],
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

  chart: any;
  ngOnInit(): void {
    this.chart = new Chart('MyChart', this.config)
  };
}