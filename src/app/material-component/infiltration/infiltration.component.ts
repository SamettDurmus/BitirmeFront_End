import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
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
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface DemoColor {
  name: string;
  color: string;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [DemoMaterialModule, MatFormFieldModule, MatChipsModule, NgFor, MatIconModule,NgApexchartsModule],
  templateUrl: './infiltration.component.html',
  styleUrls: ['./infiltration.component.scss']
})
export class InfiltrationComponent {
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
  infiltrationSymptoms: string[] = [
    "Nefes darlığı",
    "Öksürük",
    "Hırıltılı solunum",
    "Ateş",
    "Göğüs ağrısı",
    // Diğer semptomlar...
];

infiltrationTreatments: any[] = [
    {
        name: "Altta yatan nedenin tedavisi",
        description: "İnfiltrasyonun temel nedenine yönelik tedavi planlanır ve uygulanır."
    },
    {
        name: "Semptomatik tedavi",
        description: "Semptomları hafifletmek için ilaçlar veya diğer tedavi yöntemleri kullanılabilir."
    },
    // Diğer tedavi seçenekleri...
];

medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "Acil Tıp",
    "Yoğun Bakım",
    "Genel Cerrahi",
    // Diğer branşlar...
];

}
