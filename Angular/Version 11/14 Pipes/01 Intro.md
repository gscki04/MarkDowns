Pipes are formatters for your data, like filters that transform how data appears in the template.  
Syntax:  
```html
{{ value | pipeName }}
```  
Example:  
```html
<h2>{{ 'angular is awesome' | uppercase }}</h2>
```  
#### output:
```terminal
ANGULAR IS AWESOME
```  
Here, `uppercase` is a built-in pipe.

---

## Built-in Pipes in Angular

| Pipe         | Usage Example                      | Description                       |
|--------------|------------------------------------|-----------------------------------|
| `uppercase`  | `{{ name | uppercase }}`           | Converts to uppercase             |
| `lowercase`  | `{{ name | lowercase }}`           | Converts to lowercase             |
| `titlecase`  | `{{ name | titlecase }}`           | Capitalizes each word             |
| `date`       | `{{ today | date:'fullDate' }}`    | Formats dates                     |
| `currency`   | `{{ price | currency:'USD' }}`     | Formats as currency               |
| `percent`    | `{{ 0.75 | percent }}`             | Displays 75%                      |
| `slice`      | `{{ text | slice:0:5 }}`           | Like substring                    |
| `json`       | `{{ obj | json }}`                 | Pretty prints an object           |

---

##  Custom Pipes

You can also **create your own pipes**!

### 🔨 Example: Custom pipe to double a number

#### Step 1: Generate the pipe
```bash
ng g pipe double
```

#### Step 2: Angular will create `double.pipe.ts` like this:

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {
  transform(value: number): number {
    return value * 2;
  }
}
```

#### Step 3: Use it in your template

```html
<p>{{ 5 | double }}</p>  <!-- Output: 10 -->
```

---

## Chaining Pipes

You can combine multiple pipes:

```html
{{ name | lowercase | titlecase }}
```

---

## 🧠 Summary

| Feature        | Description                               |
|----------------|-------------------------------------------|
| **What**       | Format/transform data in templates        |
| **Syntax**     | `{{ value | pipeName }}`                  |
| **Built-in**   | Uppercase, Date, Currency, Percent, etc.  |
| **Custom**     | You can make your own via `ng g pipe`     |
| **Chaining**   | Yes — you can chain multiple pipes        |

---