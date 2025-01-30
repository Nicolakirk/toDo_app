import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { TodoLocation } from '../todo.location';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  todoService = inject(TodoService);
  todoLocation: TodoLocation | undefined;

  deleteSuccess: boolean = false;
  constructor() {
   const todoLocationId = parseInt(this.route.snapshot.params['todo_id'], 10);

    this.todoService.getTodoLocationById(todoLocationId)
      .then((todoLocation) => {
        this.todoLocation = todoLocation;
      });
  }
  async deleteTodo() {
    const todoLocationId = parseInt(this.route.snapshot.params['todo_id'], 10);

    try {
      // Call deleteItem and await the response status code
      const statusCode = await this.todoService.deleteItem(todoLocationId);

      // Check if the status code is 204 (No Content)
      if (statusCode === 204) {
        this.deleteSuccess = true;
        console.log(`Todo with ID ${todoLocationId} deleted successfully.`);
      } else {
        this.deleteSuccess = false;
        console.error(`Failed to delete todo with ID ${todoLocationId}: Unexpected status code ${statusCode}`);
      }
    } catch (error) {
      this.deleteSuccess = false;
      console.error(`Failed to delete todo with ID ${todoLocationId}:`, error);
    }
  }


  }



