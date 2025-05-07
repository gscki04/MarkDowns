## 1. create project  
```terminal
ng new projectName --style=scss --routing=true
```  
```sh
cd projectName
```  
## 2. Install necessary dependancies  
```sh
npm install bootstrap
npm install @angular/forms
npm install @angular/common
npm install @auth0/angular-jwt
```  

## 3. Add Bootstrap to `angular.json`  
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
]
```  

if project is standalone, add this to providers array in `app.config.ts`:  
`fe-Auth\src\app\app.config.ts`:  
```typescript
    provideHttpClient()
```  
full snippet:  
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient() // 🔄: here
  ]
};
```  