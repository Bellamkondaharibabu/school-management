import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Component } from '@angular/core';
// import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'red'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;



  ngOnInit() {
  }





  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '',   ],

    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'jan-2019',backgroundColor:'black'

       },
       { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'feb-2019',backgroundColor:'green'

       },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'mar-2019',backgroundColor:'red' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };





  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 300 ], label: 'Series A' },
      // { data: [ 50, 150, 120 ], label: 'Series B' },
      // { data: [ 250, 130, 70 ], label: 'Series C' }
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() {
  }


}
