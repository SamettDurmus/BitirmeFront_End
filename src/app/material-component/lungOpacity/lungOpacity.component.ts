import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
  selector: 'app-toolbar',
  standalone: true,
  imports:[DemoMaterialModule, MatToolbarModule, MatButtonModule, MatIconModule,NgApexchartsModule],
  templateUrl: './lungOpacity.component.html',
  styleUrls: ['./lungOpacity.component.scss']
})
export class LungOpacityComponent implements OnInit {

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
  lungOpacitySymptoms: string[] = [
    "Nefes darlığı",
    "Öksürük",
    "Hırıltılı solunum",
    "Ateş",
    "Göğüs ağrısı",
    // Diğer semptomlar...
];

lungOpacityTreatments: any[] = [
    {
        name: "Altta yatan nedenin tedavisi",
        description: "Akciğer opasitesinin temel nedenine yönelik tedavi planlanır ve uygulanır."
    },
    {
        name: "Semptomatik tedavi",
        description: "Semptomları hafifletmek için ilaçlar veya diğer tedavi yöntemleri kullanılabilir."
    },
    // Diğer tedavi seçenekleri...
];

medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "Radyoloji",
    "Yoğun Bakım",
    "Acil Tıp",
    // Diğer branşlar...
];

}
