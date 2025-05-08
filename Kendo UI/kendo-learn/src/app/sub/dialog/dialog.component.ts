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