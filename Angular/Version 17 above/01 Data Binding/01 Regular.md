### Angular Data Binding  
Data Binding means binding data between the Typescript class of the component with component's template.  

even when we look at core app component from `src/app`  
here  
`src\app\app.component.ts`:  
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demoApp';
}
```  
`src\app\app.component.html`:  
```html  
<h1>{{ title }}</h1>
```  
we can see title `demoApp` in our h1 tag which is also angular data binding  
### another example is:  
`src\app\app.component.ts`:  
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myVar = signal('String from myVar function')
}
```  
`src\app\app.component.html`:  
```html  
<p>Here's my var's value: {{ myVar() }}</p>
```  