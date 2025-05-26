```sh
app
 |-home
 |-todos
    |-todosItems
```  
`app.routes.ts`  
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', loadComponent: ()=> { return import("./home/home.component").then( x => x.HomeComponent)}
    },
    { path: 'todos', loadComponent: () => import("./todos/todos.component").then(x => x.TodosComponent),
        // add children router array inside desired component
        children: [ 
            { path: 'details', loadComponent: () => import('./components/todo-items/todo-items.component').then(x => x.TodoItemsComponent) },
            // another routers here
            ]
   }
];
```  