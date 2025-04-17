01. click: clicking on element    
02. keyup: releasing key press  
03. keydown: key press  
04. keypress: (DEPRECATED) When a printable key is pressed,	Doesn’t detect non-character keys like Shift, Ctrl.  
05. keyup.enter: key release + Enter     
06. keyup.space: key release + Space     
07. blur: click outside current element  
08. mouseover: mouse hovering on element  
09. mouseover: mouse leaving element  
& others..........
you combine any of events too  

`src\app\app.component.ts`: (Common function call for all events)  
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  handleEvents(parameter: any){ console.warn(parameter)}  // common button for all events 

} 
```  