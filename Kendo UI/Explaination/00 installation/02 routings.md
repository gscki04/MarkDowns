```css
src/app/ (component)
├── main/ (component)
├── sub/
│   ├── grid/ (component)
│   ├── buttons/ (component)
│   ├── sub-routing.module.ts
│   └── sub.module.ts
```  

### Set Up Main Routing
`app-routes.ts`  
```typescript
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'sub', loadChildren: () => import('./sub/sub.module').then(x => x.SubModule) }
];
```  

### Set Up Sub Routing  
`sub-routing.module.ts` 
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DateInputComponent } from './date-input/date-input.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'dateinput', component: DateInputComponent },
//   add more component here later  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }
```   
`sub.module.ts`  
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoutingModule } from './sub-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubRoutingModule,
  ]
})

export class SubModule { }
```  