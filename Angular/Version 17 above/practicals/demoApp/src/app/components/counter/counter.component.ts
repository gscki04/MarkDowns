import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);

  increment(){
    this.counterValue.set(this.counterValue() + 1);
  }
  
  decrement(){
    this.counterValue.update(val => val - 1); // another method we can use
  }

  reset(){
    this.counterValue.set(0);
  }
}
