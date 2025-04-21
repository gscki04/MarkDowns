##  Extras

### ✅ 1. Use `Renderer2` instead of directly accessing `nativeElement`
Direct DOM manipulation (like `elementRef.nativeElement.style.color`) works, but Angular **recommends `Renderer2`** because it’s **safer** and helps avoid issues (e.g. with server-side rendering or security).

**Updated Directive (Best Practice):**

```ts
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

}
```

### ✅ 2. Make it Reusable (Dynamic Input)

You can even add an `@Input()` to make the color dynamic:

```ts
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective implements OnInit {

  @Input() appCustomeStyle: string = 'red'; // bindable input

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.appCustomeStyle);
  }

}
```

**Then use it like this:**

```html
<h2 [appCustomeStyle]="'blue'">This is blue</h2>
<h2 [appCustomeStyle]="'green'">This is green</h2>
```

---

## 🔥 Summary

| Concept | Your Work | Best Practice |
|--------|-----------|---------------|
| Directive creation | ✅ Used `ng g directive` | ✅ Correct |
| DOM Manipulation | `ElementRef` | ✅ Works, but `Renderer2` is safer |
| Reusability | Static style | 👉 Use `@Input()` to make it dynamic |

---

- `@HostListener` (to react to events like mouse hover)
- `@HostBinding` (to bind to element properties)
- Or **structural directives** (like making your own `*ngIf`)