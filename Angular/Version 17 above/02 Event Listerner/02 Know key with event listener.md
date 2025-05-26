`src\app\app.component.html`
```html
<input type="text" (keyup)="KeyUpHandler($event)" />
```  
`src\app\app.component.ts`
```typescript
export class AppComponent {
 
  KeyUpHandler(event: KeyboardEvent){
    console.log(`you pressed || ${event.key} || this key`);
  }

}
``` 
this will print which key we pressed.  