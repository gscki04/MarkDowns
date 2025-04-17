In Angular, each component has 4 files  
1. `TypeScript file (.ts)`: This is the logic of the component.
2. `HTML file (.html)`: This is the template or view. It defines what the UI looks like.  
3. `CSS/SCSS file (.css or .scss)`: This is the component's style file. It contains styles scoped to this component.  
4. `Spec file (.spec.ts)` (Optional but auto-generated):This file is for unit testing the component.  

```sh
ng generate component my-component
```  
OR  
```sh
ng g c my-component
```  

Example:  
```sh
ng g c userList
#  will create a component folder with user-list, & add it to parent module    
```  
use this (the markup syntax is app-selectorname)   
```html
<app-user-list></app-user-list>
```  
wrapper to use this component inside other Components/Page  