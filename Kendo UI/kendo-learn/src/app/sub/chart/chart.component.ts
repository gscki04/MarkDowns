import { Component } from '@angular/core';
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-chart',
  imports: [ KENDO_CHARTS ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent { }