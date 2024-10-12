import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
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
  selector: 'app-tabs',
  standalone: true,
  imports:[DemoMaterialModule, MatTabsModule, NgApexchartsModule],
  templateUrl: './cardiomegaly.component.html',
  styleUrls: ['./cardiomegaly.component.scss']
})
export class CardiomegalyComponent {
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
  cardiomegalySymptoms: string[] = [
    "Nefes darlığı",
    "Ödem",
    "Yorgunluk",
    "Göğüs ağrısı",
    // Diğer semptomlar...
];

cardiomegalyTreatments: any[] = [
    {
        name: "İlaç Tedavisi",
        description: "Cardiomegaly semptomlarını hafifletmek ve komplikasyonları önlemek için kullanılan ilaçlar."
    },
    {
        name: "Kalp Cerrahisi",
        description: "Ciddi vakalarda, kalbin normal boyutlarına döndürülmesi veya kalp fonksiyonlarını iyileştirmek için cerrahi müdahale."
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
