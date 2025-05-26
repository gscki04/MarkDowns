at last session we craeted a hardcoded dummy_data. now we will use dynamic HTTP calls.  
- source: `https://jsonplaceholder.typicode.com/`
- API: `https://jsonplaceholder.typicode.com/todos`  

1. Provide HTTP module/providers in the app config using `provideHttpClient()`  
2. Inject the HttpClient service  
3. use the `http` methods  


1. Provide HTTP module/providers in the app config using `provideHttpClient()`  
`src\app\app.config.ts`:  
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient() // 🔄: imporet http client here
  ]
};
```  
2. use http inside service file to get data   
`src\app\services\todos.service.ts`:  
```typescript
import { inject, Injectable } from '@angular/core';
import { TodoModal } from './todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient); // by doing this we can access GET, POST, PATCH, DELETE

  constructor() { }

  getTodoFromJSONPlaceHolder(){ // this method gives us that array of todos objects
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<TodoModal>>(url);
  }

}
```  
3. access that data into component  
`src\app\todos\todos.component.ts`:  
```typescript
import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoModal } from '../services/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  
  todoService = inject(TodosService); // 1. assigned dummy data to variable

  todoItemsSignal = signal<Array<TodoModal>>([]); // 2. create signal of array & assigning it to variable

  ngOnInit(): void {
    this.todoService.getTodoFromJSONPlaceHolder()
        // using pipe for error
        .pipe(catchError((er)=>{
          console.log(er);
          throw er;          
        })
      // applying data
      ).subscribe((todo)=>{
        this.todoItemsSignal.set(todo)
      });
  }

}
```  
4. Render data into component  
`src\app\todos\todos.component.html`:  
```html
@for (todo of todoItemsSignal(); track todo.id) {
    <table style="width: 50%; border-collapse: collapse; margin-bottom: 10px;">
        <tr>
            <td style="width: 5%; border: 1px solid #ccc; padding: 8px; text-align: center;">{{ todo.id }}</td>
            <td style="width: 40%; border: 1px solid #ccc; padding: 8px; text-align: left;">{{ todo.title }}</td>
            <td style="width: 10%; border: 1px solid #ccc; padding: 8px; text-align: center;">{{ todo.completed }}</td>
        </tr>
    </table>
}
```  