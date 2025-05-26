here we have parent & child component  
```cs
home
 |- greeting
```  
1. Assing value into parent:  
`home.component.ts`  
```ts
import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal("Data from Home to Greeting");  // 🔄: here
}
```  
2. Pass the value from parent html to child html  
`home.component.html`  
```html
<p>home works!</p>
<app-greeting [recievedMessage]="homeMessage()" ></app-greeting>
<!--   🔄: [] square brackets denotes value passing from one component to another component -->
<!--   🔄: [] recievedMessage is the value catcher variable inside child component -->
```  
3. grab recieving into variable value using `input()` into child component  
`greeting.component.ts`:  
```typescript
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  recievedMessage = input();
}
```  
4. access grabed value variable inside child html  
`greeting.component.html`:  
```html
<h2>Greetings</h2>
<p>{{ recievedMessage() }}</p>
```  
