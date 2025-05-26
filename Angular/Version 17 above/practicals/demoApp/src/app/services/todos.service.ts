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
