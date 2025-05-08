import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-buttons',
  imports: [RouterOutlet, KENDO_BUTTONS], 
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  hC = () => alert("Button clicked");
  
}
