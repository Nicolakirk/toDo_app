import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TodoLocationComponent } from '../todo-location/todo-location.component';
import { TodoService } from '../todo.service';
import { TodoLocation } from '../todo.location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoLocationComponent],
  template: `
 <section>

    </section>
    <h1> To do List </h1>
    <section class="results">

    <app-todo-location *ngFor="let todoLocation of todoLocationList" [todoLocation]="todoLocation"></app-todo-location>
    </section>



  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {


  todoLocationList: TodoLocation[] = [

  ];
  todoService: TodoService = inject(TodoService);
  constructor() {
    this.todoService.getAllTodoLocations().then((todoLocationList: TodoLocation[]) => {
      this.todoLocationList = todoLocationList;
    });

    };
  }


