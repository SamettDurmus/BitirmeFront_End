import { CdkScrollable } from '@angular/cdk/scrolling';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
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
  selector: 'app-tooltip',
  standalone: true,
  imports:[DemoMaterialModule, FormsModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, NgFor, CdkScrollable,NgApexchartsModule],
  templateUrl: './pleural-thickening.component.html',
  styleUrls: ['./pleural-thickening.component.scss']
})
export class PleuralThickeningComponent {
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
  public symptoms: string[] = [
    "Nefes darlığı",
    "Göğüs ağrısı",
    "Öksürük",
    "Nadiren ateş",
    "Nadiren halsizlik",
    "Nadiren kilo kaybı"
    // Diğer semptomlar...
  ];

  public treatments: any[] = [
    {
      name: "Semptomatik Tedavi",
      description: "Plevral kalınlaşma genellikle semptomların hafifletilmesine yönelik tedavi gerektirir."
    },
    {
      name: "Amfoterisin B",
      description: "Fungal enfeksiyonlara bağlı olarak gelişen plevral kalınlaşmada kullanılan bir antifungal ilaçtır."
    },
    // Diğer tedavi seçenekleri...
  ];

  public medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "Göğüs Cerrahisi",
    "Dahiliye",
    "Radyoloji",
    // Diğer tıbbi branşlar...
  ];
}
