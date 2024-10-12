import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  selector: 'app-slider',
  standalone: true,
  imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule, MatSliderModule,NgApexchartsModule],
  templateUrl: './pulmonary-fibrosis.component.html',
  styleUrls: ['./pulmonary-fibrosis.component.scss']
})
export class PulmonaryFibrosisComponent {

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
    "Kronik öksürük",
    "Yorgunluk",
    "Göğüs ağrısı"
    // Diğer semptomlar...
  ];

  public treatments: any[] = [
    {
      name: "Oksijen Tedavisi",
      description: "Kronik nefes darlığı için kullanılır, hastaya ek oksijen sağlar."
    },
    {
      name: "İmmünsüpresif İlaçlar",
      description: "İltihaplanmayı azaltmak ve akciğer hasarını yavaşlatmak için kullanılır."
    },
    // Diğer tedavi seçenekleri...
  ];

  public medicalSpecialties: string[] = [
    "Göğüs Hastalıkları",
    "Romatoloji",
    "Nefroloji",
    "Radyoloji",
    // Diğer branşlar...
  ];

}
