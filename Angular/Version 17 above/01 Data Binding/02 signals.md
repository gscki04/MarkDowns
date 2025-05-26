#### Data Binding with modern Angular (with signals)  
using signal is modern approach  
`src\app\components\header\header.component.ts`  
```ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal("My angular header");
}
```  
`src\app\components\header\header.component.html`  
```ts
    <p> {{ title() }} </p>
```  
this will also paint `My angular header` into webpage