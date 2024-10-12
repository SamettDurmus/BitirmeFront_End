import { CommonModule, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
  selector: 'app-dialog',
  standalone: true,
  imports: [ DemoMaterialModule, NgIf, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule,NgApexchartsModule],
  templateUrl: './pleural-effusion.component.html',
  styleUrls: ['./pleural-effusion.component.scss']
})
export class PleuralEffusionComponent {
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
  pleuralEffusionSymptoms: string[] = [
    "Nefes darlığı",
    "Göğüs ağrısı",
    "Öksürük",
    "Nadiren ateş",
    "Nadiren halsizlik",
    "Nadiren kilo kaybı"
    // Diğer semptomlar...
  ];

  pleuralEffusionTreatments: any[] = [
    {
      name: "Torasentez",
      description: "Plevral sıvıyı boşaltmak için bir iğne kullanarak yapılan bir prosedür."
    },
    {
      name: "İlaç Tedavisi",
      description: "Plevral sıvıyı azaltmak veya altta yatan nedene yönelik tedavi için ilaçlar kullanılabilir."
    },
    // Diğer tedavi seçenekleri...
  ];

  medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "Göğüs Cerrahisi",
    "Dahiliye",
    "Onkoloji",
    "Yoğun Bakım",
    "Radyoloji",
    "Acil Tıp",
    "Fiziksel Tıp ve Rehabilitasyon",
    "Tıbbi Patoloji"
    // Diğer tıbbi branşlar...
  ];
}
