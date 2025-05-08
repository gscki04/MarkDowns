### 1. install buttons via CLI  
```sh
ng add @progress/kendo-angular-buttons
```  

### 2. create component for Buttons   
```sh
ng generate component Sub/Buttons
```  

### 3. Add to router  
`src\app\sub\sub-routing.module.ts`  
```typescript
  { path: 'buttons', component: ButtonsComponent },
```  

### 4. Component file  
`src\app\sub\buttons\buttons.component.ts`  
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';  // 🔄

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, KENDO_BUTTONS,],  // 🔄
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  hC = () => alert("Button clicked");  // 🔄

}
```  

### 5. Template file  
`src\app\sub\buttons\buttons.component.html`  
```html
<div>
  <p>Buttons</p>
  <button kendoButton (click)="hC()" themeColor="primary"> Primary </button>
  <button kendoButton (click)="hC()" themeColor="secondary"> Secondary </button>
  <button kendoButton (click)="hC()" themeColor="tertiary"> Tertiary</button>
  <button kendoButton (click)="hC()" themeColor="warning"> Warning </button>
  <button kendoButton (click)="hC()" themeColor="success"> Success </button>
  <button kendoButton (click)="hC()" themeColor="base"> Base </button>
  <button kendoButton (click)="hC()" themeColor="dark"> Dark </button>
  <button kendoButton (click)="hC()" themeColor="info"> Info </button>
  <button kendoButton (click)="hC()" themeColor="none"> None </button>
</div>
  

<div class="example-col">
  <p>ButtonGroup</p>
  <kendo-buttongroup>
    <button kendoButton [toggleable]="true">Option A</button>
    <button kendoButton [toggleable]="true">Option B</button>
    <button kendoButton [toggleable]="true">Option C</button>
  </kendo-buttongroup>
</div>

<h4>This is just a basic overview see current documentations from official website</h4>
<h4>or add other learnings later</h4>
```  
### 6. scss file  
`src\app\sub\buttons\buttons.component.scss`  
```scss
button{
    margin: 10px;
}
```  