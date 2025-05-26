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