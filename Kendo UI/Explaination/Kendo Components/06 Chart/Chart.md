### 1. install the component via CLI  
```sh
ng add @progress/kendo-angular-charts
```  

### 2. create chart Component  
```sh
ng generate component Sub/Chart
```  

### 3. Add to router  
`src\app\sub\sub-routing.module.ts`:  
```typescript
  { path: 'chart', component: ChartComponent },
```   
`src\app\main\main.component.html`:  
```html
      <div class="card">
        <h3>Chart</h3>
        <p>Learn how to use Kendo UI Chart.</p>
        <a routerLink="/sub/chart" class="btn">Go to Chart</a>
      </div>
```  

### 4. Modify the component TS file  
`src\app\sub\chart\chart.component.ts`:  
```typescript
import { Component } from '@angular/core';
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-chart',
  imports: [ KENDO_CHARTS ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent { }
```  

### 5. Add template  
`src\app\sub\chart\chart.component.html`:  
```html
<kendo-chart>
    <kendo-chart-series>
      <kendo-chart-series-item [data]="[1, 4, 5, 2, 1, 8]" type="column">
      </kendo-chart-series-item>
    </kendo-chart-series>
</kendo-chart>
```  