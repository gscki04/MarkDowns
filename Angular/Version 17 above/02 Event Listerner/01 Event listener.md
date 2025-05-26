## Event Listener
`src\app\app.component.html`
```html
<input type="text" (keyup)="KeyUpHandler()" />
```  
`src\app\app.component.ts`
```typescript
export class AppComponent {
 
  KeyUpHandler(){
    console.log("Happens after every key press");
  }

}
```  
now in console everytime we type something or press any key this (`Happens after every key press`) will be printed.  