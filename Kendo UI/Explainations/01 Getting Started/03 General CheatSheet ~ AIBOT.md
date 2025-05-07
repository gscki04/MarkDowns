**Kendo UI for Angular Cheat Sheet** showing how to **install, import, and use** the most common Kendo UI components.

---

## 🧾 Kendo UI for Angular Component Cheat Sheet

### 1. ✅ **Grid**

**Install:**

```bash
ng add @progress/kendo-angular-grid
```

**Import:**

```ts
import { KENDO_GRID } from '@progress/kendo-angular-grid';
```

**Use in Component:**

```html
<kendo-grid [data]="data"></kendo-grid>
```

---

### 2. ✅ **Dropdowns** (DropDownList, ComboBox, etc.)

**Install:**

```bash
ng add @progress/kendo-angular-dropdowns
```

**Import:**

```ts
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
```

**Use:**

```html
<kendo-dropdownlist [data]="categories" [value]="selected"></kendo-dropdownlist>
```

---

### 3. ✅ **Inputs** (TextBox, NumericTextBox, MaskedTextBox, etc.)

**Install:**

```bash
ng add @progress/kendo-angular-inputs
```

**Import:**

```ts
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
```

**Use:**

```html
<kendo-textbox [(ngModel)]="productName"></kendo-textbox>
<kendo-numerictextbox [(ngModel)]="price"></kendo-numerictextbox>
```

---

### 4. ✅ **Buttons**

**Install:**

```bash
ng add @progress/kendo-angular-buttons
```

**Import:**

```ts
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
```

**Use:**

```html
<button kendoButton>Click me</button>
```

---

### 5. ✅ **Date Inputs** (DatePicker, TimePicker, DateTimePicker)

**Install:**

```bash
ng add @progress/kendo-angular-dateinputs
```

**Import:**

```ts
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
```

**Use:**

```html
<kendo-datepicker [(ngModel)]="selectedDate"></kendo-datepicker>
```

---

### 6. ✅ **Layout Components** (Card, StackLayout, GridLayout, etc.)

**Install:**

```bash
ng add @progress/kendo-angular-layout
```

**Import:**

```ts
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
```

**Use:**

```html
<kendo-card>
  <kendo-card-header>Header</kendo-card-header>
  <kendo-card-body>Body</kendo-card-body>
</kendo-card>
```

---

### 7. ✅ **Charts**

**Install:**

```bash
ng add @progress/kendo-angular-charts
```

**Import:**

```ts
import { KENDO_CHARTS } from '@progress/kendo-angular-charts';
```

**Use:**

```html
<kendo-chart>
  <kendo-chart-series>
    <kendo-chart-series-item type="line" [data]="[1,2,3,4]"></kendo-chart-series-item>
  </kendo-chart-series>
</kendo-chart>
```

---

### 🧠 General Notes

* Always add the Kendo **theme** to `angular.json` styles section (if not already added):

```json
"styles": [
  "node_modules/@progress/kendo-theme-default/dist/all.css"
]
```
