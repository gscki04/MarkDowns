## 1. create project  
```terminal
ng new projectName --style=scss --routing=true
```  

## 2. Install necessary dependancies  
```terminal
npm install bootstrap
npm install @angular/forms
npm install @angular/common
```  

## 3. Add Bootstrap to `angular.json`  
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
]
```  