when we import a thing it that thing might have same name but different sources  
```typescript
  { path: 'chart', component: ChartComponent }
```  
this `ChartComponent` might be from kendo-UI or might from out custome creation  
```sh
import { ChartComponent } from '@progress/kendo-angular-charts';
```  
```sh
import { ChartComponent } from './chart/chart.component';
```  
differentiate what we actually want & choose that, other wise the program will tear  