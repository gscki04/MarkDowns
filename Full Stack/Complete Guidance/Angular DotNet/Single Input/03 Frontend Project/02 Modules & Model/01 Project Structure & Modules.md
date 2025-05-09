## 1. Project Structure & Modules  
```terminal
<!-- ng generate module app-routing --flat --module=app -->
ng generate service services/solo
ng generate component components/solo-list
ng generate component components/solo-form
```  
if routing is already available then first command will give error but neglect it.  

## 2. Create Model  
create `models` folder under src/app` folder & write model    
`src/app/models/solo.model.ts`  
```typescript
export interface SoloModel {
    id: number;
    productName: string;
}
```  

## 3. Add ReactiveFormModule to `app.module.ts`  
### imports:  
```typescript
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
```  
### imports array:  
```typescript
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  //   🔄
    HttpClientModule,     //   🔄
  ],
```  