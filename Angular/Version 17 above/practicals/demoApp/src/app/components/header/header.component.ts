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
