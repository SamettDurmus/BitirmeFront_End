import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
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
  selector: 'app-menu',
  standalone: true,
  imports: [DemoMaterialModule, MatMenuModule,NgApexchartsModule],
  templateUrl: './calcification.component.html',
  styleUrls: ['./calcification.component.scss']
})
export class CalcificationComponent { 
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
  calcificationSymptoms: string[] = [
    "Bel ağrısı",
    "Kemik kırıkları",
    "Böbrek taşları",
    // Diğer semptomlar...
];

calcificationTreatments: any[] = [
    {
        name: "Fizik Tedavi",
        description: "Kemiklerdeki kalsiyum birikimini azaltmaya yardımcı olmak için yapılan egzersizler."
    },
    {
        name: "İlaç Tedavisi",
        description: "Kalsiyum birikimini engellemek veya azaltmak için kullanılan ilaçlar."
    },
    // Diğer tedavi seçenekleri...
];

medicalSpecialties: string[] = [
    "Ortopedi",
    "Romatoloji",
    "Üroloji",
    // Diğer branşlar...
];
}
