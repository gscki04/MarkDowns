import { Component } from '@angular/core';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';  // 🔄: import into component.ts

@Component({
  selector: 'app-date-input',
  imports: [KENDO_DATEINPUTS], // 🔄: add to array
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss'
})

export class DateInputComponent {
  title = "Date Input"
}