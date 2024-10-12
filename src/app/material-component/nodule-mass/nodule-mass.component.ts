import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [DemoMaterialModule, FormsModule, MatCardModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule,NgApexchartsModule],
  templateUrl: './nodule-mass.component.html',
  styleUrls: ['./nodule-mass.component.scss']
})
export class NoduleMassComponent {
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
  noduleMassSymptoms: string[] = [
    "Öksürük",
    "Nefes darlığı",
    "Göğüs ağrısı",
    "Kilo kaybı",
    // Diğer semptomlar...
];

noduleMassTreatments: any[] = [
    {
        name: "Takip ve gözlem",
        description: "Küçük ve kansersiz nodüller genellikle takip edilir ve düzenli tarama testleri yapılır."
    },
    {
        name: "Cerrahi müdahale",
        description: "Büyük, hızla büyüyen veya kanserli olduğu düşünülen nodüller cerrahi olarak çıkarılabilir."
    },
    // Diğer tedavi seçenekleri...
];

medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "Radyoloji",
    "Genel Cerrahi",
    "Onkoloji",
    // Diğer branşlar...
];
}
