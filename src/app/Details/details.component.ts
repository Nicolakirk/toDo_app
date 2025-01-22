import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { TodoLocation } from '../todo.location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <section class="todo-details-card">
        <h2 class="todo-details-heading">{{ todoLocation?.name }}</h2>
        <p class="todo-details-description">{{ todoLocation?.description }}</p>
        <p class="todo-details-status">Status: {{ todoLocation?.status }}</p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  todoService = inject(TodoService);
  todoLocation: TodoLocation | undefined;

  constructor() {
    const todoLocationId = parseInt(this.route.snapshot.params['todo_id'], 10);

    this.todoService
      .getTodoLocationById(todoLocationId)
      .then((todoLocation) => {
        this.todoLocation = todoLocation;
      });
  }
}
