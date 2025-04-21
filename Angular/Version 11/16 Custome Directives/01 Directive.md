**Directives** are one of the most powerful and core features of Angular — they let you **add behavior to HTML elements** or **manipulate the DOM** in cool, dynamic ways.

---

## What is a Directive in Angular?

> A **Directive** is a class in Angular that lets you **attach behavior** to elements in the DOM.

They extend HTML by giving you **custom behavior, structure, or styling logic**.

---

## 3 Main Types of Directives

| Type               | Description | Example |
|--------------------|-------------|---------|
| **Component**       | Technically a directive with a template | `@Component()` |
| **Structural**      | Changes the **layout or structure** of the DOM | `*ngIf`, `*ngFor` |
| **Attribute**       | Changes the **appearance or behavior** of an element | `ngClass`, `ngStyle`, custom ones |

---

## 🔹 1. **Structural Directives**

These **add or remove elements** from the DOM.

Examples:

```html
<div *ngIf="isLoggedIn">Welcome!</div>

<ul>
  <li *ngFor="let user of users">{{ user }}</li>
</ul>
```

### ✨ Built-in Structural Directives:

- `*ngIf`
- `*ngFor`
- `*ngSwitch`

👉 The `*` syntax is shorthand for using `<ng-template>` behind the scenes.

---

## 🔹 2. **Attribute Directives**

These **change the look or behavior** of elements.

Examples:

```html
<div [ngStyle]="{'color': 'red'}">Hello</div>
<div [ngClass]="{'highlight': isActive}">Highlight me!</div>
```

### ✨ Built-in Attribute Directives:

- `ngStyle`
- `ngClass`
- `ngModel` (from FormsModule)

---

## 🔹 3. **Custom Directive**

You can create your own with:

```bash
ng generate directive highlight
```

### Example:

```ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'  // Use it like an attribute
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

Use it in your template like this:

```html
<p appHighlight>This is highlighted!</p>
```

---

| Term       | Meaning |
|------------|---------|
| Directive  | Adds behavior to DOM elements |
| Component  | A directive with a template |
| Structural | Adds/removes elements (`*ngIf`, `*ngFor`) |
| Attribute  | Modifies element behavior/style (`ngClass`, `ngStyle`) |
| Custom     | You can create your own via CLI |

---