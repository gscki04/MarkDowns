### 1. install buttons via CLI  
```sh
ng add @progress/kendo-angular-dialog
```  

### 2. create component for Buttons   
```sh
ng generate component Sub/Dialog
```  

### 3. Add to router  
`src\app\sub\sub-routing.module.ts`:  
```typescript
  { path: 'dialog', component: DialogComponent },
```  
`src\app\main\main.component.html`:  
```html
      <div class="card">
        <h3>Dialog</h3>
        <p>Learn how to use Kendo UI <Dialog></Dialog>.</p>
        <a routerLink="/sub/dialog" class="btn">Dialog</a>
      </div>
```  

### 4. Component file  
`src\app\sub\dialog\dialog.component.ts`:  
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ CommonModule, KENDO_DIALOGS, KENDO_BUTTONS],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  public showDialog: boolean = false;

  open(): void {
    console.log('Opening dialog...');
    this.showDialog = true;
  }

  close(): void {
    console.log('Closing dialog...');
    this.showDialog = false;
  }
}
```  

### 5. Template file  
```html
<button kendoButton (click)="open()">Open Dialog</button>

<kendo-dialog *ngIf="showDialog" title="Please confirm">
  <p>Are you sure you want to continue?</p>

  <kendo-dialog-actions>
    <button kendoButton (click)="close()">No</button>
    <button kendoButton themeColor="primary" (click)="close()">Yes</button>
  </kendo-dialog-actions>
</kendo-dialog>
```  
