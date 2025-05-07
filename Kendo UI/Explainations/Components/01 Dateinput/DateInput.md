### 1. Add the dateinput via CLI  
```sh
ng add @progress/kendo-angular-dateinputs
```  
### 2. import it to component  
`app.component.ts`:  
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';  // 🔄: import into component.ts


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KENDO_DATEINPUTS], // 🔄: add to array
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kendo-angular-app';
}
```  
`app.component.html`:  
```html

```  