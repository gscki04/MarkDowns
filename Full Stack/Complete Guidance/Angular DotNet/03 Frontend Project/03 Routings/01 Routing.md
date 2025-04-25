Add component to routes array  
```typescript
const routes: Routes = [
  { path: '', redirectTo: 'solos-list', pathMatch: 'full' },
  { path: 'solos-list', component: SoloListComponent },
  { path: 'add-solo', component: SoloFormComponent },
  { path: 'edit-solo/:id', component: SoloFormComponent },
  { path: '**', redirectTo: 'solos-list' }
];
```  
### Full snippet  
`fe-solo\src\app\app-routing.module.ts`  
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoloFormComponent } from './components/solo-form/solo-form.component';
import { SoloListComponent } from './components/solo-list/solo-list.component';

// 🔄: add routing to this array
const routes: Routes = [
  { path: '', redirectTo: 'solos-list', pathMatch: 'full' },
  { path: 'solos-list', component: SoloListComponent },
  { path: 'add-solo', component: SoloFormComponent },
  { path: 'edit-solo/:id', component: SoloFormComponent },
  { path: '**', redirectTo: 'solos-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```  