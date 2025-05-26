now we will create a dummy data into service but for first let create a type for it.  
```sh
services
    |-todo.type.ts          # to define type
    |-todo.service.ts       # service logic
    |-todo.service.specs.ts # testing file
```  
1. define type to the data  
`src\app\services\todo.type.ts`:  
```typescript
// it is ideal to create model folder for thos file because model is a type at the end of the day, but for this example, to make things easy we are keeping it right here  
export type TodoModal = {
    userId: number;
    completed: boolean;
    title: string;
    id: number;
};
```  
2. creating hardcoded dummy data in service file  
`src\app\services\todos.service.ts`:  
```typescript
import { Injectable } from '@angular/core';
import { TodoModal } from './todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  dummyData: Array<TodoModal> = [ // used TodoModal as referencing type here
    { id: 0, userId: 1 , title: "Groceries", completed: false },
    { id: 1, userId: 2 , title: "Coffie", completed: true },
    { id: 2, userId: 3 , title: "Wood Chop", completed: false },
  ]

  constructor() { }
}
```  
3. use this service (Dummy data) in component  
`src\app\todos\todos.component.ts`:  
```typescript
import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService); // assigned dummy data to variable

  ngOnInit(): void {
    console.log(this.todoService.dummyData);
    // this will print all dummy data into console    
  }

}
```  
`src\app\todos\todos.component.html`:  
```html
<!-- accessing dummy data method 1: using dummy data directly -->
<p>{{ todoService.dummyData[0].title }}</p> 

<!-- accessing dummy data method 2: accessing signal array -->
<p>{{ todoItemsSignal()[1].title }}</p> 

<!-- accessing dummy data method 3: using all elements of signal using angular for loop -->
@for (todo of todoItemsSignal(); track $index) {
    <p>{{ todo.title }}</p> 
}

<!-- accessing dummy data method 4: linked track our objects unique value (here id) -->
@for (todo of todoItemsSignal(); track todo.id) {
    <p>{{ todo.title }}</p> 
}
```  