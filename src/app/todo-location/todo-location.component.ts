import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TodoLocation } from '../todo.location';
import { ChangeDetectorRef } from '@angular/core';
import { ButtonComponent } from "../Button/button.component";


@Component({
  selector: 'app-todo-location',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './todo-location.component.html',
  styleUrls: ['./todo-location.component.css'],

})
export class TodoLocationComponent {

  @Input() todoLocation!: TodoLocation;
  @Output() statusChange = new EventEmitter<TodoLocation>();


  // constructor(private cdr: ChangeDetectorRef) {}

  changeStatus(newStatus: string): void {
    this.todoLocation.status = newStatus; // Update the status
    this.statusChange.emit(this.todoLocation);
  }

}


