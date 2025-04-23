Add routing for  
- Add  
- Update  
- Login  
- Register  
- List of restaurants  

## 1. create a `add-resto` component   
```sh
ng g c add-resto
```  

## 2. create a `update-resto` component   
```sh
ng g c update-resto
```  

## 3. create a `login` component   
```sh
ng g c login
```  

## 4. create a `resgister` component   
```sh
ng g c resgister
```  

## 5. create a `list-resto` component   
```sh
ng g c list-resto
```  

no need to create deleting component because a single button can do the job of it  


## 6. import all components & add an object of component & path to routes array  
`app-routing.module.ts`  
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 🔄: component imports in routing.module.ts
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { ListRestoComponent } from './list-resto/list-resto.component';


AddRestoComponent
UpdateRestoComponent
LoginComponent
ResgisterComponent
ListRestoComponent

// 🔄: adding routing objects to routes array  
const routes: Routes = [
  {component:AddRestoComponent, path:"add"},
  {component:UpdateRestoComponent, path:"update"},
  {component:LoginComponent, path:"login"},
  {component:ResgisterComponent, path:"register"},
  {component:ListRestoComponent, path:"list"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```  

## 7. write a suitable template for it.  
`app.component.html`  
```html
<h2>Resto App</h2>
<ul>
  <li routerLink="add">Add Restaurant</li>
  <li routerLink="update">Update Restaurant</li>
  <li routerLink="login">Login</li>
  <li routerLink="register">Register</li>
  <li routerLink="list">List</li>
</ul>

<router-outlet></router-outlet>
```  

## 8. check the ui & routing  
```sh
ng serve
# OR
npm start
# Or
npm run start
```  