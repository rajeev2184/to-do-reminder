import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';  // Import the TodoComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],  // Add TodoComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';
}
