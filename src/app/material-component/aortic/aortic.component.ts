import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';
import { DemoMaterialModule } from 'src/app/demo-material-module';
export interface ChartOptions {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
}

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule, DatePipe,NgApexchartsModule],
  templateUrl: './aortic.component.html',
  styleUrls: ['./aortic.component.scss']
})
export class  AorticComponent {
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        { name: 'Aort Genişlemesi', data: this.generateRandomData() }
      ],
      chart: {
        type: 'line',
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: Array.from({ length: 30 }, (_, i) => `${i + 1} Haziran`)
      },
      yaxis: {
        title: {
          text: 'Vaka Sayısı'
        }
      },
      fill: {
        opacity: 1
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      legend: {
        position: 'bottom'
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val + " vaka";
          }
        }
      },
      grid: {
        borderColor: '#f1f1f1'
      }
    };
  }
  ngOnInit(): void { }
  generateRandomData(): number[] {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
  }

  aorticEnlargementSymptoms: string[] = [
    "Göğüs ağrısı",
    "Nefes darlığı",
    "Kalp atışlarında düzensizlik",
    "Baş dönmesi veya bayılma",
    // Diğer semptomlar...
  ];
  
  aorticEnlargementTreatments: any[] = [
    {
      name: "İlaç Tedavisi",
      description: "Aort genişlemesinin kontrol altına alınması için kullanılan ilaçlar."
    },
    {
      name: "Cerrahi Tedavi",
      description: "Aortun onarılması veya değiştirilmesi için cerrahi müdahale."
    },
    // Diğer tedavi seçenekleri...
  ];
  
  medicalSpecialties: string[] = [
    "Kardiyoloji",
    "Kardiyovasküler Cerrahi",
    "Dahiliye",
    "Radyoloji",
    // Diğer branşlar...
  ];
}
