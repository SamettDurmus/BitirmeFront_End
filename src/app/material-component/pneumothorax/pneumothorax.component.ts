import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
  selector: 'app-snackbar',
  standalone: true,
  imports: [DemoMaterialModule, MatSnackBarModule, FormsModule, MatButtonModule, MatFormFieldModule,NgApexchartsModule],
  templateUrl: './pneumothorax.component.html',
  styleUrls: ['./pneumothorax.component.scss']
})
export class PneumothoraxComponent {
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
    "Aniden başlayan göğüs ağrısı",
    "Nefes darlığı",
    "Hava açlığı hissi"
    // Diğer semptomlar...
  ];

  public treatments: any[] = [
    {
      name: "Oksijen Tedavisi",
      description: "Pnömotoraksın hafif vakalarında kullanılır, hastaya ek oksijen sağlar."
    },
    {
      name: "Torasentez",
      description: "Akciğerden hava çıkarmak için kullanılan bir prosedürdür."
    },
    // Diğer tedavi seçenekleri...
  ];

  public medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "Acil Tıp",
    "Göğüs Cerrahisi",
    "Radyoloji",
    // Diğer branşlar...
  ];

}
