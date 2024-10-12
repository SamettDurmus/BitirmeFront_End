import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
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
  selector: 'app-grid',
  standalone: true,
  imports: [DemoMaterialModule, MatGridListModule, NgFor,NgApexchartsModule],
  templateUrl: './atelectasis.component.html',
  styleUrls: ['./atelectasis.component.scss']
})
export class AtelectasisComponent {
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        { name: 'Atelectasis', data: this.generateRandomData() }
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

  atelectasisSymptoms: string[] = [
    "Nefes alma güçlüğü",
    "Öksürük",
    "Göğüs ağrısı",
    // Diğer semptomlar...
];

atelectasisTreatments: any[] = [
    {
        name: "Fizyoterapi",
        description: "Akciğerlerin açılmasına ve hava yollarının temizlenmesine yardımcı olmak için yapılan egzersizler."
    },
    {
        name: "Bronkoskopi",
        description: "Hava yollarını incelemek ve tıkanıklıkları temizlemek için kullanılan bir cerrahi işlem."
    },
    // Diğer tedavi seçenekleri...
];

medicalSpecialties: string[] = [
    "Pulmonoloji",
    "Göğüs Cerrahisi",
    "Fiziksel Tıp ve Rehabilitasyon",
    // Diğer branşlar...
];
}
