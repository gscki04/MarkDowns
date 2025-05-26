Angular Services are used to encapsulate data  
making HTTP calls, or performing any task that is not related directly to data rendering  
```sh
ng g service services/todos
# 
ng g s services/todos
```  
1. unlike generating components it will not generate dediacted folder of todos it will have files directly inside `services` folder.  
2. & this command do not create any `html` & `css/scss` file because services are only meant to do logic base jobs & not render anything.  
3. components has `@Component` decorators while service has `@Injectable` decorator.  

## global availablity  
`src\app\services\todos.service.ts`:  
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
}
```  
here 
```typescript
  providedIn: 'root'
```  
this statements says this service is available throughout entire application.  

## dedicated availablity  
to make this record available only for specific component  
1. remove providedIn key  
`src\app\services\todos.service.ts`:  
```typescript
import { Injectable } from '@angular/core';

@Injectable({
//   providedIn: 'root' // remove it from here  
})
export class TodosService {

  constructor() { }
}
``` 
2. use into desired component 
create `providers` key inside `@Component` object, which will have array of the service, then add our service to this array 
`src\app\components\header\header.component.ts`:  
```typescript
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [TodosService] // 🔄: create this key & add service to array
})
export class HeaderComponent {
  title = signal("My angular header");
}
```  