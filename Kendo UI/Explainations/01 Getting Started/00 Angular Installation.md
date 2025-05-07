### 1. install angular  
```sh
npm install -g @angular/cli
```  

### 2. Create Angular Appliction  
```sh
ng new kendo-angular-app
```  
OR for legacy approach(NgModules)  
```sh
ng new kendo-angular-app --standalone false
```  
## 3. modify the `app.component.html`:  
```html
<h2>Practicals</h2>
<!-- Future changes here -->
```  

## 4. Run the application  
```sh
cd kendo-angular-app
ng serve -o
```  