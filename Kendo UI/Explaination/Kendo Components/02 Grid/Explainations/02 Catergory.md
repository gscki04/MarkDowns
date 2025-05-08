`Catergories` ----> `used for dropdown list`

### 🟦 **Creating the Category Model**

```typescript
export class Category {
    public text: string = '';
    public value: number | null = 0;
}
```

* **What is this?**

  * This defines a TypeScript class for the `Category` object.
  * Each `Category` has two properties:

    * **`text`**: This is the label or display name that will be shown in the dropdown list.
    * **`value`**: This is the identifier or value that will be sent when the user selects a category. It is a number, or `null` if no category is selected.

* **Why is this necessary?**

  * You need to define a structure for each category so that the data used in the dropdown matches what the dropdown expects: a text field (display name) and a value field (identifier).

---

### 🟦 **Creating the Categories List**

```typescript
export const categories: Category[] = [
    { text: 'Beverages', value: 1 },
    { text: 'Condiments', value: 2 },
    { text: 'Confections', value: 3 },
    { text: 'Dairy Products', value: 4 },
    { text: 'Grains/Cereals', value: 5 },
    { text: 'Meat/Poultry', value: 6 },
    { text: 'Produce', value: 7 },
    { text: 'Seafood', value: 8 }
];
```

* **What is this?**

  * This is an array of objects, where each object represents a **category**.
  * Every object in the array follows the `Category` class structure, meaning it has a **`text`** (the name of the category) and a **`value`** (the unique identifier).

* **Why is this necessary?**

  * This array provides the data that will populate the dropdown. When users interact with the dropdown, they will see the **category names** (`text`) but the **`value`** will be used internally (e.g., for filtering products).

---

### 🟦 **How the Categories are Used**

In the earlier parts of the app, you see this array (`categories`) being used in the dropdown:

```html
<kendo-dropdownlist
    [data]="dropDownItems"
    textField="text"
    valueField="value"
    [defaultItem]="defaultItem"
    (valueChange)="handleFilterChange($event)"
    [style.width.px]="170"
>
</kendo-dropdownlist>
```

* **`[data]="dropDownItems"`**: The dropdown uses the `categories` array (`dropDownItems`) to display category names in the list.
* **`textField="text"`**: This tells the dropdown to use the `text` property of the `Category` objects for the visible text in the dropdown.
* **`valueField="value"`**: This tells the dropdown to use the `value` property as the internal value when an item is selected.

When the user selects a category, the `handleFilterChange` method is called, and the selected **`value`** is passed to filter the products by category ID.

---