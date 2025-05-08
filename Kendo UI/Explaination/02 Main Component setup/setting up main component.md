### `app\main\main.component.ts`  
```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [ 
      RouterLink // 🔄: need router link to drill components under this component  
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
```  

### `app\main\main.component.html`  
```html
<div class="mainDiv">

    <div class="card-container">

      <div class="card">
        <h3>Date Input</h3>
        <p>Learn how to use Kendo UI Date Input.</p>
        <a routerLink="/sub/dateinput" class="btn">Go to Date Input</a>
      </div>
        
      <div class="card">
        <h3>Grid</h3>
        <p>Learn how to use Kendo UI Grid.</p>
        <a routerLink="/sub/grid" class="btn">Go to Grid</a>
      </div>
      
      <div class="card">
        <h3>Buttons</h3>
        <p>Learn how to use Kendo UI Buttons.</p>
        <a routerLink="/sub/buttons" class="btn">Go to Buttons</a>
      </div>

    </div>

  </div>
  
```  
### `app\main\main.component.scss`
```scss
.mainDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
  }
  
  .card {
    flex: 1 1 250px; // Allows shrinking/growing
    max-width: 300px;
    min-width: 250px;
    height: 220px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  /* 📱 Responsive Breakpoints */
  @media (max-width: 768px) {
    .card-container {
      flex-direction: column;
      align-items: center;
    }
  
    .card {
      width: 90%;
      max-width: 400px;
    }
  }
```  