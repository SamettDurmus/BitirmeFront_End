import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
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
  selector: 'app-progress',
  standalone: true,
  imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule, CommonModule, MatProgressBarModule, MatCardModule, MatRadioModule, NgIf, MatSliderModule, MatProgressBarModule,NgApexchartsModule],
  templateUrl: './other-lesion.component.html',
  styleUrls: ['./other-lesion.component.scss']
})
export class OtherLesionComponent {
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
  otherLesionSymptoms: string[] = [
    "Öksürük",
    "Nefes darlığı",
    "Göğüs ağrısı",
    "Kan tükürme",
    // Diğer semptomlar...
];

otherLesionTreatments: any[] = [
    {
        name: "Takip ve gözlem",
        description: "Küçük ve benign diğer lezyonlar genellikle takip edilir ve düzenli tarama testleri yapılır."
    },
    {
        name: "Biyopsi ve değerlendirme",
        description: "Diğer lezyonların teşhisi için görüntüleme testleri ve biyopsi yapılabilir."
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
