### 1. install buttons via CLI  
```sh
ng add @progress/kendo-angular-editor
```  

### 2. create component for Buttons   
```sh
ng generate component Sub/Editor
```  

### 3. Add to router  
`src\app\sub\sub-routing.module.ts`:  
```typescript
  { path: 'editor', component: EditorComponent },
```  
`src\app\main\main.component.html`:  
```html
      <div class="card">
        <h3>Editor</h3>
        <p>Learn how to use Kendo UI Editor.</p>
        <a routerLink="/sub/editor" class="btn">Editor</a>
      </div>
```  

### 4. Component file  
`src\app\sub\editor\editor.component.ts`:  
```typescript
import { Component } from '@angular/core';
import { KENDO_EDITOR } from '@progress/kendo-angular-editor';

@Component({
  selector: 'app-editor',
  imports: [KENDO_EDITOR],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent { }
```  

### 5. Template file  
`src\app\sub\editor\editor.component.html`:  
```html
<kendo-editor style="height: 400px; width: 900px;"></kendo-editor>
```  