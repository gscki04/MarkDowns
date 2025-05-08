src\app\sub\dialog\dialog.component.html:
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

src\app\sub\dialog\dialog.component.spec.ts:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

src\app\sub\dialog\dialog.component.ts:
```typescript
import { Component } from '@angular/core';
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [KENDO_DIALOGS, KENDO_BUTTONS],
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
    this.showDialog = false;
  }
}

```

