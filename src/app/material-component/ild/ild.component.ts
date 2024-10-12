import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
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
  selector: 'app-expansion',
  standalone: true,
  imports: [DemoMaterialModule,NgApexchartsModule],
  templateUrl: './ild.component.html',
  styleUrls: ['./ild.component.scss']
})
export class ILDComponent {
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
  ildSymptoms: string[] = [
    "Nefes darlığı",
    "Kuru öksürük",
    "Halsizlik",
    "Kilo kaybı",
    // Diğer semptomlar...
];

ildTreatments: any[] = [
    {
        name: "Kortikosteroidler",
        description: "İltihaplanmayı azaltmak ve fibrozisi kontrol altına almak için kullanılır."
    },
    {
        name: "Immunosupresanlar",
        description: "Bağışıklık sistemini baskılamak suretiyle iltihaplanmayı azaltır."
    },
    // Diğer tedavi seçenekleri...
];

medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "İç Hastalıkları",
    "Radyoloji",
    "Pulmoner Rehabilitasyon",
    // Diğer branşlar...
];
}
