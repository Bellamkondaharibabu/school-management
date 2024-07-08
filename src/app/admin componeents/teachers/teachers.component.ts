import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {


  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };

  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  constructor() {
  }



  // messages: any[] = [];
  // newMessage: string = '';

  // sendMessage() {
  //   if (this.newMessage.trim()) {
  //     this.messages.push({
  //       text: this.newMessage,
  //       sender: 'user'
  //     });
  //     this.newMessage = '';
  //   }
  // }
}
