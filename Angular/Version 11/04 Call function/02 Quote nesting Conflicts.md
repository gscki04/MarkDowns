Why this is invalid?
```html
<button (click)="getName("brother")">Click Me</button>
```  
& why this is valid  
```html
<button (click)="getName('brother')">Click Me</button>
```  
this is because HTML template handling in Angular    
1. in first case we write function inside a double quotes & then written string parameter in also double quote  
this will translate the html like this  
1. `"getName("` : a string  
2. `brother` : a possible variable which might have value or might be undefined or arbitrary value  
3. `")"` : again a string  
which confuses the markup handler  
2. in second case it act as `"getName('brother')"` only, double quotes defining fucntion & single defining parameter  
& we can do vice_verca too  
```html
<button (click)="getName('brother')">Click Me</button> 
<!-- single quote inside double quotes✅ -->
``` 
```html
<button (click)='getName("brother")'>Click Me</button>
<!-- double quote inside single quotes✅ -->
```  
```html
<button (click)="getName("brother")">Click Me</button>
<!-- double quote inside double quotes❌ -->
```  
```html
<button (click)='getName('brother')'>Click Me</button>
<!-- single quote inside single quotes❌ -->
```  