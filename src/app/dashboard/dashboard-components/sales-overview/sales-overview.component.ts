import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  NgApexchartsModule
} from "ng-apexcharts";
import { DemoMaterialModule } from "src/app/demo-material-module";

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
  selector: "app-sales-overview",
  standalone: true,
  imports: [NgApexchartsModule, DemoMaterialModule],
  templateUrl: "./sales-overview.component.html"
})
export class SalesOverviewComponent implements OnInit {
  public chartOptions: any;
  public diseases: { name: string, color: string }[] = [
    { name: 'Aortic enlargement', color: 'text-success' },
    { name: 'Atelectasis', color: 'text-info' },
    { name: 'Calcification', color: 'text-warning' },
    { name: 'Cardiomegaly', color: 'text-danger' },
    { name: 'Consolidation', color: 'text-primary' },
    { name: 'ILD', color: 'text-secondary' },
    { name: 'Infiltration', color: 'text-dark' },
    { name: 'Lung Opacity', color: 'text-muted' },
  ];


  constructor() {
    this.chartOptions = {
      series: [
        { name: 'Aortic enlargement', data: this.generateRandomData() },
        { name: 'Atelectasis', data: this.generateRandomData() },
        { name: 'Calcification', data: this.generateRandomData() },
        { name: 'Cardiomegaly', data: this.generateRandomData() },
        { name: 'Consolidation', data: this.generateRandomData() },
        { name: 'ILD', data: this.generateRandomData() },
        { name: 'Infiltration', data: this.generateRandomData() },
        { name: 'Lung Opacity', data: this.generateRandomData() },
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
}
