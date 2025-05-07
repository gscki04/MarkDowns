### 1. `fe-Auth\src\app\env\env.ts`:  
```typescript
export const environment = {
    production: false,
    apiBaseUrl: 'https://localhost:7074/api/'
  };
```  

### 2. add this to production object at `angular.json`:  
```json
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/env/env.ts",
                  "with": "src/env/env.prod.ts"
                }
              ],
              ...
            }
```  
