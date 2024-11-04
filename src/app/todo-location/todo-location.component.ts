import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoLocation } from '../todo.location';

@Component({
  selector: 'app-todo-location',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet],
  template: `
    <section class="todo">
      <h2 class="todo-name">{{ todoLocation.name }}</h2>
      <p class="todo-status">Status: {{ todoLocation.status }}</p>
      <button (click)="changeStatus('doing')" *ngIf="todoLocation.status === 'to do'">Start</button>
      <button (click)="changeStatus('done')" *ngIf="todoLocation.status === 'doing'">Complete</button>
      <button (click)="changeStatus('todo')" *ngIf="todoLocation.status === 'done'">Reopen</button>
      <a [routerLink]="['/details', todoLocation.id]">Learn More</a>
    </section>
  `,
  styles: `
    .todo {
      background: var(--accent-color);
      border-radius: 30px;
      padding-bottom: 30px;
    }
    .todo-name {
      color: var(--primary-color);
      padding: 10px 20px 0 20px;
    }
    .todo-status {
      padding: 10px 20px 20px 20px;
    }
    section.todo a {
      padding-left: 20px;
      text-decoration: none;
      color: var(--primary-color);
    }
    section.todo a::after {
      content: '\x83';
      margin-left: 5px;
    }
  `
})
export class TodoLocationComponent {
  @Input() todoLocation!: TodoLocation;
  @Output() statusChange = new EventEmitter<TodoLocation>();

  changeStatus(newStatus: 'todo' | 'doing' | 'done') {
    this.todoLocation.status = newStatus;
    this.statusChange.emit(this.todoLocation);
  }
}


