import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post_todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post_todo.component.html',
  styleUrls: ['./post_todo.component.css']
})
export class Post_todoComponent implements OnInit {
  todoService = inject(TodoService)

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),


  });
  submissionSuccess: boolean = false;

  async onSubmit() {
    // Check if form is valid before submission
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }

    // Extract values from the form
    const { name, description, status } = this.form.value;

    // Log the form values to ensure they're being captured
    console.log('Form Values:', this.form.value);

    // Create the form data as a simple object (no FormData)
    const formData = {
      name: name || '',
      description: description || '',
      status: status || '',
    };

    console.log("formData", formData); // Check the content of formData

    // Send the form data to the service as JSON
    await this.todoService.submitTodo(formData);

    this.submissionSuccess = true;

    // Reset the form after a successful submission
    this.form.reset();

    // Optionally, hide the success message after a few seconds
    setTimeout(() => {
      this.submissionSuccess = false;
    }, 3000); // Hide message after 3 seconds
  }


}
