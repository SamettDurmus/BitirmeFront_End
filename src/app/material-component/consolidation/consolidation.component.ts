import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
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
	selector: 'app-stepper',
	standalone: true,
	imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule,NgApexchartsModule],
	templateUrl: './consolidation.component.html',
	styleUrls: ['./consolidation.component.scss'],
	providers: [{
		provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
	}]
})
export class ConsolidationComponent implements OnInit {
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
  consolidationSymptoms: string[] = [
	"Öksürük",
	"Nefes darlığı",
	"Ateş",
	"Göğüs ağrısı",
	// Diğer semptomlar...
];

consolidationTreatments: any[] = [
	{
		name: "İlaç Tedavisi",
		description: "Konsolidasyon semptomlarını hafifletmek ve enfeksiyonu kontrol altına almak için kullanılan ilaçlar."
	},
	{
		name: "Oksijen Tedavisi",
		description: "Nefes darlığı olan hastalara ek oksijen sağlamak için kullanılır."
	},
	// Diğer tedavi seçenekleri...
];

medicalSpecialties: string[] = [
	"Göğüs Hastalıkları",
	"İç Hastalıkları",
	"Acil Tıp",
	"Radyoloji",
	// Diğer branşlar...
];
}
