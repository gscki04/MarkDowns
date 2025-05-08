unlike bootstrap we donot inject entire Kendo UI at once in our angluar application  
we add the KUI components using  
```sh
ng add @Progess/<KUI_Component_Name>
```  

Examples:  
1. to add Grid  
```sh
ng add @progress/kendo-angular-grid
```  
2. to add Charts  
```sh
ng add @progress/kendo-angular-charts
```  
but one thing pertical is good practice is adding a kendoUI theme to `angular.json`  
```json
            "styles": [
              "node_modules/@progress/kendo-theme-default/dist/all.css",
              "src/styles.scss"
            ],
```  
we can add serveral other themes too  
```sh
# material
"node_modules/@progress/kendo-theme-material/dist/all.css"
```  
```sh
# bootstrap
"node_modules/@progress/kendo-theme-bootstrap/dist/all.css"
```  
but remember only one theme at a time is permisible