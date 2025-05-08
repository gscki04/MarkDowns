import { Component } from '@angular/core';
import { ChartWizardDataRow, KENDO_CHARTWIZARD } from '@progress/kendo-angular-chart-wizard'; // 🔄

@Component({
  selector: 'app-chart-wiz',
  imports: [ KENDO_CHARTWIZARD ], // 🔄
  templateUrl: './chart-wiz.component.html',
  styleUrl: './chart-wiz.component.scss'
})
export class ChartWizComponent {

  // 🔄:
  public data: ChartWizardDataRow[] = [
    [
        { field: 'Product Name', value: 'Calzone' },
        { field: 'Quantity', value: 1 },
        { field: 'Price', value: 12.39 },
        { field: 'Tax', value: 2.48 },
        { field: 'Total', value: 14.87 }
    ],
    [
        { field: 'Product Name', value: 'Margarita' },
        { field: 'Quantity', value: 2 },
        { field: 'Price', value: 8.79 },
        { field: 'Tax', value: 3.52 },
        { field: 'Total', value: 21.1 }
    ],
    [
        { field: 'Product Name', value: 'Pollo Formaggio' },
        { field: 'Quantity', value: 1 },
        { field: 'Price', value: 13.99 },
        { field: 'Tax', value: 2.8 },
        { field: 'Total', value: 16.79 }
    ]
];

}
