import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { TodoLocationComponent } from '../todo-location/todo-location.component';
import { TodoLocation } from '../todo.location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoLocationComponent],
  template: `
    <section class="results">
      <div class="todo-card" *ngFor="let todoLocation of todoLocationList">
        <app-todo-location [todoLocation]="todoLocation" (statusChange)="handleStatusChange($event)"></app-todo-location>
      </div>
    </section>
  `,
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
    } catch (error) {
      console.error('Error loading todo locations:', error);
    }
  }
  handleStatusChange(updatedLocation: TodoLocation): void {
    // Handle the status update here (e.g., send it to a service or update the UI)
    console.log('Updated todoLocation status:', updatedLocation.status);
    // Update the todoLocationList with the updated status
    const index = this.todoLocationList.findIndex(location => location.id === updatedLocation.id);
    if (index !== -1) {
      this.todoLocationList[index] = updatedLocation;
    }
  }
}

