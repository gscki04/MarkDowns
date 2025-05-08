import { Component } from '@angular/core';
import { KENDO_EDITOR } from '@progress/kendo-angular-editor';

@Component({
  selector: 'app-editor',
  imports: [KENDO_EDITOR],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent { }