import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { TodoLocationComponent } from '../todo-location/todo-location.component';
import { TodoLocation } from '../todo.location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  todoLocationList: TodoLocation[] = [];
  todoService = inject(TodoService);

  constructor() {
    this.loadTodoLocations();
  }

  async loadTodoLocations() {
    try {
      this.todoLocationList = await this.todoService.getAllTodoLocations();
      console.log(this.todoLocationList)
    } catch (error) {
      console.error('Error loading todo locations:', error);
    }
  }

  handleStatusChange(updatedLocation: TodoLocation): void {

    const index = this.todoLocationList.findIndex(location => location.todo_id === updatedLocation.todo_id);
    if (index !== -1) {
      this.todoLocationList[index] = updatedLocation;
    }
  }
  ngOnInit(): void {
    // Any additional initialization if needed
  }
}

