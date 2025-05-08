### 1. install the component via CLI  
```sh
ng add @progress/kendo-angular-chart-wizard
```  

### 2. create chart Component  
```sh
ng generate component Sub/ChartWiz
```  

### 3. Add to router  
`src\app\sub\sub-routing.module.ts`  
```typescript
  { path: 'buttons', component: ButtonsComponent },
```  
`src\app\main\main.component.html`  
```html
      <div class="card">
        <h3>Chart</h3>
        <p>Learn how to use Kendo UI Chart.</p>
        <a routerLink="/sub/chartwiz" class="btn">Go to Chart</a>
      </div>
```  
### 4. Modify the component TS file  
`src\app\sub\chart-wiz\chart-wiz.component.ts`:  
```typescript
import { Component } from '@angular/core';
import { ChartWizardDataRow, KENDO_CHARTWIZARD } from '@progress/kendo-angular-chart-wizard'; // 🔄

@Component({
  selector: 'app-chart-wiz',
  imports: [ KENDO_CHARTWIZARD ], // 🔄
  templateUrl: './chart-wiz.component.html',
  styleUrl: './chart-wiz.component.scss'
})
export class ChartWizComponent {

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
```  

### 5. Add template  
`src\app\sub\chart-wiz\chart-wiz.component.html`:  
```html
<kendo-chartwizard [data]="data"> </kendo-chartwizard>
```  